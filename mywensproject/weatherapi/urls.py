from django.urls import path, include
from . import views

urlpatterns = [
    #path('', views.getData),
    path('',views.postData),
    path('view', include('weatherapp.urls'))
]