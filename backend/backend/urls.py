from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static

def home_view(request):
    return HttpResponse("<h1>Hello from PriceSpotter!</h1>")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home_view, name="home"),  # <-- Add this for the root URL
    path("api/items/", include("pricespotter.urls")),
path("api/", include("pricespotter.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
