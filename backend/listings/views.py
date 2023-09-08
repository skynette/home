import logging

import django_filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from drf_spectacular.utils import extend_schema

from .exceptions import PropertyNotFoundException
from models.models import Property, PropertyViews
from .serializers import PropertySerializer, PropertyViewsSerializer, PropertyCreateSerializer

logger = logging.getLogger(__name__)


class PropertyFilter(django_filters.FilterSet):
    advert_type = django_filters.CharFilter(field_name="advert_type", lookup_expr="iexact")
    property_type = django_filters.CharFilter(field_name="property_type", lookup_expr="iexact")
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name="price", lookup_expr="gt")
    price__lt = django_filters.NumberFilter(field_name="price", lookup_expr="lt")

    class Meta:
        model = Property
        fields = ["advert_type", "property_type", "price"]
        

class ListAllPropertyAPIView(generics.ListAPIView):
    serializer_class = PropertySerializer
    queryset = Property.objects.all().order_by("-created_at")
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = PropertyFilter
    search_fields = ["country", "city"]
    ordering_fields = ["created_at"]

    @extend_schema(
        summary="List all properties",
        description="List all properties in the database",
        tags=["Properties"],
    )
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


list_all_property_api_view = ListAllPropertyAPIView.as_view()