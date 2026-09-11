from rest_framework import viewsets
from .models import CustomUser
from .models import *
from .serializers import *


class UserViewset(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class SoundViewset(viewsets.ModelViewSet):
    queryset = Sound.objects.all()
    serializer_class = SoundSerializer
