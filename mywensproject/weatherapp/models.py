from django.db import models

# Create your models here.
class Weather(models.Model):
    temp = models.FloatField(null=True, blank=True)
    pressure = models.FloatField(null=True, blank=True)
    humidity = models.FloatField(null=True, blank=True)
    visibility = models.FloatField(null=True, blank=True)
    wind_speed = models.FloatField(null=True, blank=True)
    cloud = models.FloatField(null=True, blank=True)
    rain = models.FloatField(null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    utc_time = models.DateTimeField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)