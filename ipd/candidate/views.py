from http.client import ResponseNotReady
from urllib import response
from django import dispatch
from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Candidate, Response1, Personality
from .serializers import CandidateLoginSerializer, CandidateDetailsSerializer, ResponseSerializer, PersonalitySerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@api_view(['GET','POST'])
def CandidateAction( request):
    if request.method == 'GET':
        serializer1 = CandidateLoginSerializer(data = request.data)
        print(serializer1.data)
        comp_obj = Candidate.objects.get(cand_email = serializer1.data['cand_email'])
        if comp_obj.cand_password == request.data['cand_password']:
            return Response(request.data)
        else:
            return Response(None)

    elif request.method == 'POST':
        serializer1 =  CandidateDetailsSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(serializer1.errors)
        return Response(serializer1.data)

@api_view(['GET','POST'])
@csrf_exempt 
def ResponseAction(request, format = None):
    if request.method == 'GET':
        comp_obj = Response1.objects.filter(testid = request.data['testid'])
        serializer1 = ResponseSerializer(comp_obj)
        return Response(serializer1.data)


    elif request.method == 'POST':
        serializer1 =  ResponseSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return Response(serializer1.data)

@api_view(['GET'])
def PersonalityAction( request, format = None):
    if request.method == 'GET':
        try:
            comp_obj = Personality.objects.get(**request.data)
            serializer1 = PersonalitySerializer(comp_obj)
            return Response(serializer1.data)
        except:
            return Response("Dont bother")            
    

    
