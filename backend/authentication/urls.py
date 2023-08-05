from django.urls import path
from . import views

app_name = 'authentication'

urlpatterns = [
    path('register/', views.user_registration_view, name='register'),
    # path('login/', LoginView.as_view(), name='login'),
    # path('logout/', LogoutView.as_view(), name='logout'),
]