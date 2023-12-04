from django.urls import path
from .views import weather_chart

urlpatterns = [
    path('', weather_chart, name='weather_chart'),
]
