from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

app_name = 'authentication'

urlpatterns = [
    path('register/', views.user_registration_view, name='register'),
    path('email-verify/', views.email_verify_view, name='email_verify'),
    path('login/', views.login_view, name='login'),
    # path('logout/', LogoutView.as_view(), name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('password-reset/<uidb64>/<token>/', views.password_reset_confirm_view, name='password_reset_confirm'),
    path('request-reset-email/', views.request_reset_email_view, name='request_reset_email'),
    path('password-reset-complete/', views.set_new_password_view, name='password_reset_complete'),
]