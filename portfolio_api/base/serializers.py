from rest_framework import serializers
from .models import Contact, Technology

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

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'tech_thumbnail',
        )
        model = Technology