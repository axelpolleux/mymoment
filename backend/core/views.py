from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import *
from .serializers import *


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SoundViewset(viewsets.ModelViewSet):
    queryset = Sound.objects.all()
    serializer_class = SoundSerializer
