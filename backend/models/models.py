from django.db import models
from .base import BaseModel


class Property(BaseModel):
    """Model for storing properties"""

    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=20, decimal_places=2)
    image = models.ImageField(upload_to="properties")
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Properties"
        verbose_name = "Property"

    def get_absolute_url(self):
        return "url"