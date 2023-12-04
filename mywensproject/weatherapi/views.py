from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from weatherapp.models import Weather
from .serializers import ItemSerializer

# Create your views here.
@api_view(['GET'])
def getData(request):
    weather = Weather.objects.all()
    serializer = ItemSerializer(weather, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postData(request):
    weather = Weather.objects.all()
    serializer = ItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
