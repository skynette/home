from django.db import models
from shortuuid.django_fields import ShortUUIDField


class BaseModel(models.Model):
    """Base model for all models in the project"""

    id = ShortUUIDField(length=10, max_length=40, unique=True, editable=False, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ["-created_at", "-updated_at"]
