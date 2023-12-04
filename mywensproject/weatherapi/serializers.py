from rest_framework import serializers
from weatherapp.models import Weather

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = '__all__'