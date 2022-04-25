from http.client import ResponseNotReady
from urllib import response
from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Candidate, Response1, Personality
from .serializers import CandidateLoginSerializer, CandidateDetailsSerializer, ResponseSerializer, PersonalitySerializer
class CandidateAction(APIView):
    def get(self, request, format = None):
        comp_obj = Candidate.objects.get(email = request.data['email'])
        if comp_obj.password == request.data['password']:
            return Response(request.data)
        else:
            return Response(None)
    
    def post(self, request, format = None):
        serializer1 =  CandidateDetailsSerializer(request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return(serializer1.data)

class ResponseAction(APIView):
    def get(self, request, format = None):
        comp_obj = Response1.objects.filter(testid = request.data['testid'])
        serializer1 = ResponseSerializer(comp_obj)
        return Response(serializer1.data)
    
    def post(self, request, format = None):
        serializer1 =  ResponseSerializer(request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return(serializer1.data)

class PersonalityAction(APIView):
    def get(self, request, format = None):
        comp_obj = Personality.objects.get(jobid = request.data['jobid'])
        serializer1 = PersonalitySerializer(comp_obj)
        return Response(serializer1.data)
    

    
