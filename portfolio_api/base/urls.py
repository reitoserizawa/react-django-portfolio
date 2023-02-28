from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.contacts_list),
    path('technologies/', views.technologies_list),
]

