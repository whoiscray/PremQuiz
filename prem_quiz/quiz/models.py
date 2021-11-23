from django.db import models
from django.forms import ModelForm

# Create your models here.

class Player(models.Model):
    player_firstname = models.CharField(max_length=200)
    player_lastname = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class PlayerForm(ModelForm):
    class Meta:
        model = Player
        fields = ['player_firstname','player_lastname']

class Season(models.Model):
    season_year = models.IntegerField()
    date_added = models.DateTimeField(auto_now_add=True)

class Goals(models.Model):
    season_id = models.ForeignKey(Season, on_delete=models.DO_NOTHING)
    player_id = models.ForeignKey(Player, on_delete=models.DO_NOTHING)
    goals = models.IntegerField()
    date_added = models.DateTimeField(auto_now_add=True)

class Appearances(models.Model):
    season_id = models.ForeignKey(Season, on_delete=models.DO_NOTHING)
    player_id = models.ForeignKey(Player, on_delete=models.DO_NOTHING)
    appearances = models.IntegerField()
    date_added = models.DateTimeField(auto_now_add=True)