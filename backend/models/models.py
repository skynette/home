import random
import string

from autoslug import AutoSlugField
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
from .base import BaseModel
from django_countries.fields import CountryField

User = get_user_model()

class PropertyPublishedManager(models.Manager):
	def get_queryset(self):
		return super(PropertyPublishedManager, self).get_queryset().filter(published_status=True)


class Property(BaseModel):
	class AdvertType(models.TextChoices):
		FOR_SALE = "For Sale", _('For Sale')
		FOR_RENT = "For Rent", _('For rent')
		AUCTION = "Auction", _('Auction')

	class PropertyType(models.TextChoices):
		HOUSE = "House", _('House')
		APARTMENT = "Apartment", _('Apartment')
		OFFICE = "Office", _('Office')
		WAREHOUSE = "Warehouse", _('Warehouse')
		COMMERCIAL = "Commercial", _("Commercial")
		OTHER = "Other", _("Other")
	
	user = models.ForeignKey(User, verbose_name=_("Agent, Seller or Buyer"), related_name="agent_buyer", on_delete=models.DO_NOTHING)
	title = models.CharField(verbose_name=_("Property Title"), max_length=255)
	slug = AutoSlugField(populate_from="title", unique=True, always_update=True)
	ref_code = models.CharField(verbose_name=_("Property Ref Code"), max_length=255, unique=True, blank=True, null=True)
	description = models.TextField(_("Description"), blank=True, default="Default description")
	property_type = models.CharField(_("Property Type"), max_length=255, choices=PropertyType.choices, default=PropertyType.OTHER)
	advert_type = models.CharField(_("Advert Type"), max_length=255, choices=AdvertType.choices, default=AdvertType.FOR_SALE)
	bedrooms = models.IntegerField(_("bedrooms"), default=1)
	bathrooms = models.IntegerField(_("bathrooms"), default=1)
	published_status = models.BooleanField(_("published_status"), default=False)
	views = models.IntegerField(_("Total views"), default=0)
	city = models.CharField(_("City"), max_length=255, default="Lagos")
	long = models.CharField(_("City"), max_length=255, default="Lagos")
	lat = models.CharField(_("City"), max_length=255, default="Lagos")
	street_address = models.CharField(_("Street Address"), max_length=255, default="Street Address")
	postal_code = models.CharField(_("Postal Code"), max_length=255, default="140")
	country = CountryField(_("Country"), blank=True, default="NG", blank_label="(select country)")
	price = models.DecimalField(_("Price"), max_digits=8, decimal_places=2, default=0.0)
	plot_area = models.DecimalField(_("Plot Area"), decimal_places=2, max_digits=8, default=0.0)
	cover_photo = models.ImageField(_("Main Photo"), default="/house_sample.jpg", null=True, blank=True)
	photo1 = models.ImageField(_("Photo1"), default="/house_sample.jpg", null=True, blank=True)
	photo2 = models.ImageField(_("photo2"), default="/house_sample.jpg", null=True, blank=True)
	photo3 = models.ImageField(_("photo3"), default="/house_sample.jpg", null=True, blank=True)
	photo4 = models.ImageField(_("photo4"), default="/house_sample.jpg", null=True, blank=True)

	objects = models.Manager()
	published = PropertyPublishedManager()

	def __str__(self) -> str:
		return f"{self.title}"

	class Meta:
		verbose_name = "Property"
		verbose_name_plural = "Properties"

	def save(self, *args, **kwargs):
		self.title = str.title(self.title)
		self.description = str.capitalize(self.description)
		self.ref_code = "ES"+"".join(random.choices(string.ascii_uppercase + string.digits, k=10))
		super().save(*args, **kwargs)
		

class PropertyViews(BaseModel):
	ip = models.CharField(_("IP"), max_length=255)
	property = models.ForeignKey(Property, related_name="property_views", on_delete=models.CASCADE)

	def __str__(self) -> str:
		return f"Total views on - {self.property.title} is - {self.property.views} view(s)"

	class Meta:
		verbose_name = "Total views on Property"
		verbose_name_plural = "Total Property views"
		