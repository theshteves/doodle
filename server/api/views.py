from rest_framework import viewsets

from api.serializers import PlayerSerializer
from api.models import Player

# Create your views here.
class PlayerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
