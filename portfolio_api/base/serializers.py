from rest_framework import serializers
from .models import Contact, Technology, Project

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'email',
            'phone',
            'message',
            'created',
        )
        model = Contact

class CreateContactSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'email',
            'phone',
            'message',
        )
        model = Contact


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'tech_thumbnail',
        )
        model = Technology

class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)
    class Meta:
        fields = (
            'id',
            'name',
            'description',
            'project_thumbnail',
            'project_main_image',
            'technologies',
            'demo',
            'github',
            'live',
            'created',
        )
        model = Project
        extra_kwargs = {'technologies': {'required': False}}
