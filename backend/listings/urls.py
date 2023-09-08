from django.urls import path
from . import views

urlpatterns = [
    path("", views.list_all_property_api_view, name="listings"),
    path("create/", views.create_property_api_view, name="create_property"),
    path("<slug:slug>/", views.property_detail_api_view, name="retrieve_property"),
]