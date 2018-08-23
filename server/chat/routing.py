from django.conf.urls import url
from django.urls import path

from chat.consumers import ChatConsumer

websocket_urlpatterns = [
    url(r'^ws/chat/(?P<room_name>[^/]+)/$', ChatConsumer),
    #path('ws/chat/<room_name>)/', ChatConsumer),
]

