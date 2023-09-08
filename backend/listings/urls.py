from django.urls import path
from . import views

urlpatterns = [
    path("", views.list_all_property_api_view, name="listings"),
]