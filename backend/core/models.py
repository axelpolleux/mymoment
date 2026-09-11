from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
	picture = models.ImageField(blank=True, null=True, upload_to="profile_pics")

	def __str__(self):
		return self.username


class Sound(models.Model):
	title = models.CharField(blank=False, unique=True)
	description = models.TextField(blank=True, null=False, max_length=350)
	audio = models.FileField(blank=False, upload_to="sounds", validators=[FileExtensionValidator(['mp3', 'ogg'])])
	uploader = models.ForeignKey(blank=False, null=False, to=CustomUser)

	def __str__(self):
		return self.title
