from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponse
from .models import Projects, Presentations, DataScience
from portfolio.serializers.portpolio_serializers import ProjectSerializer, PresentationSerializer, DataScienceSerializer
from rest_framework.decorators import api_view

# views for Projects model
@api_view(['GET'])
def project_list(request):
    projects = Projects.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)
    pprint(projects)

@api_view(['GET'])
def project_detail(request, pk):
    project = get_object_or_404(Projects, pk=pk)
    serializer = ProjectSerializer(project)
    return Response(serializer.data)

@api_view(['POST'])
def project_create(request):
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT', 'PATCH'])
def project_update(request, pk):
    project = get_object_or_404(Projects, pk=pk)
    serializer = ProjectSerializer(project, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def project_delete(request, pk):
    project = get_object_or_404(Projects, pk=pk)
    project.delete()
    return Response(status=204)


# views for Presentations model
@api_view(['GET'])
def presentation_list(request):
    presentations = Presentations.objects.all()
    serializer = PresentationSerializer(presentations, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def presentation_detail(request, pk):
    presentation = get_object_or_404(Presentations, pk=pk)
    serializer = PresentationSerializer(presentation)
    return JsonResponse(serializer.data)

@api_view(['POST'])
def presentation_create(request):
    data = request.data
    serializer = PresentationSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)

@api_view(['PUT', 'PATCH'])
def presentation_update(request, pk):
    presentation = get_object_or_404(Presentations, pk=pk)
    data = request.data
    serializer = PresentationSerializer(presentation, data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data)
    return JsonResponse(serializer.errors, status=400)

@api_view(['DELETE'])
def presentation_delete(request, pk):
    presentation = get_object_or_404(Presentations, pk=pk)
    presentation.delete()
    return HttpResponse(status=204)

# views for DataScience model
@api_view(['GET'])
def datascience_list(request):
    datascience = DataScience.objects.all()
    serializer = DataScienceSerializer(datascience, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def datascience_detail(request, pk):
    datascience = get_object_or_404(DataScience, pk=pk)
    serializer = DataScienceSerializer(datascience)
    return JsonResponse(serializer.data)

@api_view(['POST'])
def datascience_create(request):
    data = request.data
    serializer = DataScienceSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)

@api_view(['PUT', 'PATCH'])
def datascience_update(request, pk):
    datascience = get_object_or_404(DataScience, pk=pk)
    data = request.data
    serializer = DataScienceSerializer(datascience, data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data)
    return JsonResponse(serializer.errors, status=400)

@api_view(['DELETE'])
def datascience_delete(request, pk):
    datascience = get_object_or_404(DataScience, pk=pk)
    datascience.delete()
    return HttpResponse(status=204)
