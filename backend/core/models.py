from django.db import models


class Sound(models.Model):
    title = models.CharField(unique=True)
    audio = models.FileField(upload_to="sounds")
    # uploader = models.ForeignKey()
    def __str__(self):
        return self.title
