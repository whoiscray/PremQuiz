from django.db import models

# Create your models here.

class Player(models.Model):
    player_firstname = models.CharField(max_length=200)
    player_lastname = models.CharField(max_length=200)
    pub_date = models.DateTimeField().auto_now_add