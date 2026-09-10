from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import *

router = DefaultRouter()
router.register(r'users', UserViewset)
router.register(r'sounds', SoundViewset)

urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
]
