from django.db import models


class Sound(models.Model):
    title = models.CharField()
    audio = models.FileField(upload_to="sounds")
    # uploader = models.ForeignKey()
