from django.db import models

# Create your models here.
class Player(models.Model):
    name = models.CharField(max_length=32)
    img = models.FileField() # image/svg+xml
    sound = models.FileField() # audio/ogg
    #x = models.PositiveSmallIntegerField()
    #y = models.PositiveSmallIntegerField()
