from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.contacts_list),
    path('technologies/', views.technologies_list),
    path('technologies/<str:pk>', views.get_technology),
    path('projects/', views.projects_list),
    path('projects/<str:pk>', views.get_project)
]

