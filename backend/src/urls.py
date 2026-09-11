from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .settings import MEDIA_URL, MEDIA_ROOT, DEBUG
from core.views import *

router = DefaultRouter()
router.register(r'users', UserViewset)
router.register(r'sounds', SoundViewset)

urlpatterns = [
	path("", include(router.urls)),
	path("admin/", admin.site.urls),
]

if DEBUG:
	urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
