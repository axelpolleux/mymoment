from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Sound


class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ["username"]


class SoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sound
        fields = "__all__"
