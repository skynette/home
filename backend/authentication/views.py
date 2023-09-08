from django.urls import reverse
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from authentication.serializers import RegisterSerializer, EmailVerificationSerializer, LoginSerializer, ResetPasswordEmailRequestSerializer, SetNewPasswordSerializer
from authentication.renderers import UserRenderer
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from .utils import Util
from drf_spectacular.utils import extend_schema, OpenApiParameter
from .utils import Util
import jwt
from django.conf import settings


User = get_user_model()

class UserRegistrationView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    renderer_classes = (UserRenderer,)

    @extend_schema(
        request=RegisterSerializer,
        responses={201: RegisterSerializer},
        description="User registration view",
        tags=["Authentication"],
    
    )
    def post(self, request):
        user = request.data
        serializer = self.get_serializer(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data

        user = User.objects.get(email=user_data["email"])
        token = RefreshToken.for_user(user)
        relativeLink = reverse("authentication:email_verify")
        current_site = get_current_site(request).domain
        absurl = "http://" + current_site + relativeLink + "?token=" + str(token.access_token)
        email_body = "Hi " + user.username + " Use the link below to verify your email \n" + absurl
        data = {
            "subject": "Verify your email",
            "email_body": email_body,
            "to_email": user.email,
        }
        Util.send_email(data)

        return Response(user_data, status=status.HTTP_201_CREATED)
    

user_registration_view = UserRegistrationView.as_view()


class VerifyEmailView(generics.GenericAPIView):
    serializer_class = EmailVerificationSerializer

    @extend_schema(
        request=EmailVerificationSerializer,
        description="Email verification view",
        tags=["Authentication"],
        parameters=[EmailVerificationSerializer,],
    )
    def get(self, request):
        token = request.GET.get("token")
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            user = User.objects.get(id=payload["user_id"])
            if not user.is_verified:
                user.is_verified = True
                user.save()
            return Response({"email": "Successfully activated"}, status=status.HTTP_200_OK)
        # when the token is expired
        except jwt.ExpiredSignatureError as identifier:
            return Response({"error": "Activation Link Expired"}, status=status.HTTP_400_BAD_REQUEST)
        # when the token is invalid
        except jwt.exceptions.DecodeError as identifier:
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)


email_verify_view = VerifyEmailView.as_view()


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    renderer_classes = (UserRenderer,)

    @extend_schema(
        request=LoginSerializer,
        responses={200: LoginSerializer},
        description="Login view",
        tags=["Authentication"],
    )
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


login_view = LoginAPIView.as_view() 


class PasswordResetRequestAPIView(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer
    renderer_classes = (UserRenderer,)

    @extend_schema(
        request=ResetPasswordEmailRequestSerializer,
        responses={200: ResetPasswordEmailRequestSerializer},
        description="Password reset request view",
        tags=["Authentication"],
    )
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        email = request.data.get('email', None)
        if not email:
            return Response({"error": "Email not present"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
            token = PasswordResetTokenGenerator().make_token(user)

            current_site = get_current_site(request).domain
            relativeLink = reverse("authentication:password_reset_confirm", kwargs={'uidb64': uidb64, 'token': token})
            absurl = "http://" + current_site + relativeLink
            email_body = "Hi \n" +  " Use the link below to reset your password \n" + absurl
            data = {
                "subject": "Reset your password",
                "email_body": email_body,
                "to_email": user.email,
            }
            Util.send_email(data)
        return Response({"success": "Password reset email sent"}, status=status.HTTP_200_OK)


request_reset_email_view = PasswordResetRequestAPIView.as_view()


class PasswordTokenVerifyAPIView(generics.GenericAPIView):
    @extend_schema(
        summary="Password token verify view",
        description="Password token verify view",
        tags=["Authentication"],
    )
    def get(self, request, uidb64, token):
        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.filter(id=id).first()

            if user:
                if not PasswordResetTokenGenerator().check_token(user, token):
                    return Response({"error": "Token is not valid, request a new"}, status=status.HTTP_401_UNAUTHORIZED)
                
            return Response({"success": True, 'message': "Creds valid", 'uidb64': uidb64, 'token': token}, status=status.HTTP_200_OK)
                
        except DjangoUnicodeDecodeError as e:
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({"error": "Token is not valid, request a new"}, status=status.HTTP_401_UNAUTHORIZED)


password_reset_confirm_view = PasswordTokenVerifyAPIView.as_view()


class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    @extend_schema(
        request=SetNewPasswordSerializer,
        responses={200: SetNewPasswordSerializer},
        description="Set new password view",
        tags=["Authentication"],
    )
    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({"success": True, 'message': 'Password reset success!'}, status=status.HTTP_200_OK)
    

set_new_password_view = SetNewPasswordAPIView.as_view()
