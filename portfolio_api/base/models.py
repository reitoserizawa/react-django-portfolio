from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    message = models.TextField(max_length=500)
    created = models.DateField(auto_now_add=True)

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    project_thumbnail = models.ImageField()
    project_main_image = models.ImageField()
    demo = models.TextField(blank=True)
    github = models.TextField(blank=True)
    live = models.TextField(blank=True)
    created = models.DateField(auto_now_add=True)

class Technology(models.Model):
    name = models.CharField(max_length=100)
    tech_thumbnail = models.ImageField()
    projects = models.ManyToManyField('Project', blank=True, related_name='technologies')
