from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    message = models.TextField(max_length=500)
    created = models.DateField(auto_now_add=True)

class Technology(models.Model):
    name = models.CharField(max_length=100)
    tech_thumbnail = models.ImageField()
