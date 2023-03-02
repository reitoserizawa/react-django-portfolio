from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Contact, Technology, Project
from .serializers import ContactSerializer, TechnologySerializer, ProjectSerializer

@api_view(['GET', 'POST'])
def contacts_list(request):
    if request.method == 'GET':
        data = Contact.objects.all()
        serializer = ContactSerializer(data, context={"request": request}, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        contact = Contact.objects.create(
            name=request.POST.get('name'), 
            phone=request.POST.get('phone'), 
            email=request.POST.get('email'), 
            message=request.POST.get('message'))
        return Response(contact)

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

