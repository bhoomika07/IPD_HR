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

@api_view(['GET','POST'])
def CompanyAction(request, format = None):
    if request.method == 'GET':
        try:
            comp_obj = company.objects.get(compid = request.data['compid'])
        except:
            return Response("Invalid creds")
        if comp_obj.comp_password == request.data['comp_password']:
            return Response(request.data)
        else:
            return Response("No User Found")

    elif request.method == 'POST':
        serializer1 =  CompanyDetailsSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return Response(serializer1.data)

@api_view(['GET','POST'])
def JobAction(request, format = None):
    if request.method == 'GET':
        comp_obj = job.objects.all()
        serializer1 = JobSerializer(comp_obj, many = True)
        return Response(serializer1.data)

    elif request.method == 'POST':
        serializer1 =  JobSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return Response(serializer1.data)

@api_view(['GET','POST'])
def TestAction(request, format = None):
    if request.method == 'GET':
        comp_obj = test.objects.filter(**request.data)
        serializer1 = TestSerializer(comp_obj, many = True)
        return Response(serializer1.data)

    elif request.method == 'POST':
        serializer1 =  TestSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            print(serializer1.errors)
        return Response(serializer1.data)
    
@api_view(['GET','POST'])
def QuestionAction(request, format = None):
    if request.method == 'GET':
        comp_obj = question.objects.filter(testid = request.data['testid'])
        serializer1 =   QuestionSerializer(comp_obj, many = True)
        return Response(serializer1.data)
    
    elif request.method == 'POST':
        serializer1 =  QuestionSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return Response(serializer1.data)

@api_view(['GET','POST'])
def OptionAction(request, format = None):
    if request.method == 'GET':
        comp_obj = option.objects.filter(qid = request.data['qid'])
        serializer1 =   OptionSerializer(comp_obj, many = True)
        return Response(serializer1.data)
    
    elif request.method == 'POST':
        serializer1 =  OptionSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
        else:
            return Response(None)
        return Response(serializer1.data)

@api_view(['GET'])
def AllCompDetails(request):
    pk = request.data['compid']
    try:
        comp_obj = company.objects.get(compid = pk)
    except:
        comp_obj = company.objects.all()
    serializer1 = CompanyDetailsSerializer(comp_obj, many = True)
    return Response(serializer1.data)