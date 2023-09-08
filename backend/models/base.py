from django.db import models
from shortuuid.django_fields import ShortUUIDField
from django.utils.translation import gettext_lazy as _


class BaseModel(models.Model):
    """Base model for all models in the project"""

    pkid = models.BigAutoField(_("primary key id"), primary_key=True, editable=False)
    id = ShortUUIDField(_("Id"), length=10, max_length=40, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ["-created_at", "-updated_at"]
