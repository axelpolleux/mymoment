from rest_framework import serializers
from .models import CustomUser
from .models import Sound


class UserSerializer(serializers.Serializer):
    class Meta:
        model = CustomUser
        fields = ["username"]


class SoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sound
        fields = "__all__"
