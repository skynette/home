from django.db import models
from models.base import BaseModel
from django.contrib.auth.models import AbstractUser, BaseUserManager
from rest_framework_simplejwt.tokens import RefreshToken


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        """Create and save a new user"""
        if not username:
            raise ValueError("User must have a username")
        if not email:
            raise ValueError("User must have an email address")

        user = self.model(username=username,
                          email=self.normalize_email(email), **extra_fields)
        user.set_password(password)

        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """Create and save a new superuser"""
        if not password:
            raise ValueError("Superuser must have a password")

        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)
        return user


class User(AbstractUser, BaseModel):
    username = models.CharField(max_length=255, unique=True, db_index=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    is_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.email

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }
