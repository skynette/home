from django.contrib import admin
from models.models import Property, PropertyViews

# Admin class for Property model
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'property_type', 'advert_type', 'published_status', 'price')
    list_filter = ('property_type', 'advert_type', 'published_status')
    search_fields = ('title', 'user__username', 'city', 'country')

    readonly_fields = ('ref_code',)

    fieldsets = (
        ('General Information', {
            'fields': ('title', 'ref_code', 'description', 'user')
        }),
        ('Property Details', {
            'fields': ('property_type', 'advert_type', 'bedrooms', 'bathrooms', 'plot_area', 'price')
        }),
        ('Location', {
            'fields': ('city', 'country', 'street_address', 'postal_code', 'long', 'lat')
        }),
        ('Media', {
            'fields': ('cover_photo', 'photo1', 'photo2', 'photo3', 'photo4')
        }),
        ('Status', {
            'fields': ('published_status', 'views')
        }),
    )

    actions = ['make_published']

    def make_published(self, request, queryset):
        queryset.update(published_status=True)
    make_published.short_description = "Mark selected properties as published"

# Admin class for PropertyViews model
class PropertyViewsAdmin(admin.ModelAdmin):
    list_display = ('ip', 'property')
    list_filter = ('property',)
    search_fields = ('ip', 'property__title')

# Register your models and admin classes
admin.site.register(Property, PropertyAdmin)
admin.site.register(PropertyViews, PropertyViewsAdmin)
