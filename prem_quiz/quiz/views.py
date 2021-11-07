from django.shortcuts import render
from django.http import HttpResponse

from .models import Player

# Create your views here.

def index(request):
    player_list = Player.objects.order_by('-pub_date')[:5]

    context = {
        'player_list': player_list,
    }

    return render(request, 'quiz/index.html', context)