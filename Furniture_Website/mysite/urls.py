from django.urls import path
from . import views

urlpatterns = [
    
    path("", views.toHome, name='home'),
    path("home", views.home, name='home'),
    path("request/", views.ContactRequest, name='ContactRequest')

]