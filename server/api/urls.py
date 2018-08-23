from django.urls import include, path
from rest_framework import routers

from api.views import PlayerViewSet

router = routers.DefaultRouter()
router.register('players', PlayerViewSet)

app_name = 'api'
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
