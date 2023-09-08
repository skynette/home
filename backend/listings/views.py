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


class CreatePropertyAPIView(generics.GenericAPIView):
    serializer_class = PropertyCreateSerializer
    permission_classes = [permissions.IsAuthenticated]

    @extend_schema(
        summary="Create a new property",
        description="Create a new property in the database",
        tags=["Properties"],
        request=PropertyCreateSerializer,
        responses={200: PropertySerializer}
    )
    def post(self, request):
        user = getattr(request, 'user', None)
        data = request.data
        data['user'] = user.pkid
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            logger.info(
                f"Property {serializer.data.get('title')} created"
            )
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

create_property_api_view = CreatePropertyAPIView.as_view()


class PropertyDetailViewsAPIView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = PropertySerializer

    @extend_schema(
        summary="Get a property",
        description="Get a property by slug",
        tags=["Properties"],
        responses={200: PropertySerializer}
    )
    def get(self, request, slug, *args, **kwargs):
        property = Property.objects.get(slug=slug)

        # checking if request coming from proxy server to get the ip address
        x_forwarded_for = self.request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(":")[0]
        # gets the ip address from remote address
        else:
            ip = request.META.get("REMOTE_ADDR")

        if not PropertyViews.objects.filter(property=property, ip=ip).exists():
            PropertyViews.objects.create(property=property, ip=ip)
            property.views += 1
            property.save()

        serializer = self.get_serializer(property, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


property_detail_api_view = PropertyDetailViewsAPIView.as_view()
