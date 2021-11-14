from django.shortcuts import render
from django.http import HttpResponse

from .models import Player, PlayerForm

import pdb

# Create your views here.

def index(request):
    player_list = Player.objects.order_by('-id')[:5]

    context = {
        'player_list': player_list,
    }
    return render(request, 'quiz/index.html', context)


def add_player(request):
    context = {}
    
    if request.method == 'POST':
        form = PlayerForm(request.POST)

        if form.is_valid():
            form.save()
    else:
        context['form']= PlayerForm()

   
    
    return render(request, "quiz/add_player.html", context)