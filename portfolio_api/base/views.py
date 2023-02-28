from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Contact, Technology
from .serializers import ContactSerializer, TechnologySerializer

@api_view(['GET'])
def contacts_list(request):
    if request.method == 'GET':
        data = Contact.objects.all()
        serializer = ContactSerializer(data, context={"request": request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def technologies_list(request):
    if request.method == 'GET':
        data = Technology.objects.all()
        serializer = TechnologySerializer(data, context={"request": request}, many=True)
        return Response(serializer.data)