from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Contact, Technology, Project
from .serializers import ContactSerializer, TechnologySerializer, ProjectSerializer

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

@api_view(['GET'])
def get_technology(request, pk):
    if request.method == 'GET':
        data = Technology.objects.get(id=pk)
        serializer = TechnologySerializer(data, context={"request": request},many=False)
        return Response(serializer.data)

@api_view(['GET'])
def projects_list(request):
    if request.method == 'GET':
        data = Project.objects.all()
        serializer = ProjectSerializer(data, context={"request": request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_project(request, pk):
    if request.method == 'GET':
        data = Project.objects.get(id=pk)
        serializer = ProjectSerializer(data, context={"request": request},many=False)
        return Response(serializer.data)

