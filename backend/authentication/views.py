from django.urls import reverse
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from authentication.serializers import RegisterSerializer
from .utils import Util
import jwt
from django.conf import settings


User = get_user_model()

class UserRegistrationView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
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