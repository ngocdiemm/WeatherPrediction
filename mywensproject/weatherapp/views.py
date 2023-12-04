from django.shortcuts import render

# Create your views here.
def weather_chart(request):
    weather_data = weather_data.objects.all()
    return render(request, 'weatherapp/index.html', {'weather_data': weather_data})