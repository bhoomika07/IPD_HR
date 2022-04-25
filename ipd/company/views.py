from http.client import ResponseNotReady
from urllib import response
from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import company,job, test, question, option
from .serializers import CompanyLoginSerializer,CompanyDetailsSerializer,JobSerializer,TestSerializer,QuestionSerializer,OptionSerializer

class CompanyAction(APIView):
    def get(self, request, format = None):
        comp_obj = company.objects.get(compid = request.data['compid'])
        if comp_obj.password == request.data['password']:
            return Response(request.data)
        else:
            return Response(None)
    
    def post(self, request, format = None):
        serializer1 =  CompanyDetailsSerializer(request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return(serializer1.data)

class JobAction(APIView):
    def get(self, request, format = None):
        comp_obj = job.objects.all()
        serializer1 = JobSerializer(comp_obj)
        return Response(serializer1.data)
    
    def post(self, request, format = None):
        serializer1 =  JobSerializer(request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return(serializer1.data)

class TestAction(APIView):
    def get(self, request, format = None):
        comp_obj = test.objects.get(jobid = request.data['jobid'])
        serializer1 = TestSerializer(comp_obj)
        return Response(serializer1.data)
    
    def post(self, request, format = None):
        serializer1 =  TestSerializer(request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return(serializer1.data)
    
class QuestionAction(APIView):
    def get(self, request, format = None):
        comp_obj = question.objects.filter(testid = request.data['testid'])
        serializer1 =   QuestionSerializer(comp_obj)
        return Response(serializer1.data)
    
    def post(self, request, format = None):
        serializer1 =  QuestionSerializer(request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return(serializer1.data)

class OptionAction(APIView):
    def get(self, request, format = None):
        comp_obj = option.objects.filter(qid = request.data['testid'])
        serializer1 =   OptionSerializer(comp_obj)
        return Response(serializer1.data)
    
    def post(self, request, format = None):
        serializer1 =  OptionSerializer(request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return(serializer1.data)