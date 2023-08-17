from django.urls import reverse
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from .utils import Util

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')

        if not username.isalnum():
            raise serializers.ValidationError(
                {'username': ('The username should only contain alphanumeric characters')})

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {'email': ('Email is already in use')})
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError(
                {'username': ('Username is already in use')})
        
        return attrs
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ("token",)


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(max_length=128, min_length=8, write_only=True)
    username = serializers.CharField(max_length=255, min_length=3, read_only=True)
    tokens = serializers.CharField(max_length=255, min_length=3, read_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'tokens')

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        user = authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        
        if not user.is_verified:
            raise AuthenticationFailed('Email is not verified')
        
        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens()
        }


class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ['email']
        
    def validate(self, attrs):
        email = attrs["data"].get('email', '')
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
            token = PasswordResetTokenGenerator().make_token(user)

            current_site = get_current_site(request=attrs["data"].get("request")).domain
            relativeLink = reverse("authentication:password_reset_confirm", kwargs={'uidb64': uidb64, 'token': token})
            absurl = "http://" + current_site + relativeLink
            email_body = "Hi \n" +  " Use the link below to reset your password \n" + absurl
            data = {
                "subject": "Reset your password",
                "email_body": email_body,
                "to_email": user.email,
            }
            Util.send_email(data)

        else:
            raise serializers.ValidationError(
                {'email': ('There is no user with this email')})
        
        return attrs
    