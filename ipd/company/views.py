from http.client import ResponseNotReady
from urllib import response
from django.forms import model_to_dict
from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .models import company,job, test, question, option
from django.contrib.auth.hashers import make_password,check_password
import json

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
        req=request.data['data']
        candidate=company(compid=req['compid'],comp_password=make_password(req['comp_password']),about=req['about'],name=req['name'])
        candidate.save()
        print("stored in db")
        return Response({'status_code':0,'status_msg':'Register Successfull'})

@api_view(['GET','POST'])
def JobAction(request):
    if request.method == 'GET':
        job_objs = job.objects.all()
        list0 = []
        for job_obj in job_objs:
            dict1 = model_to_dict(job_obj)
            dict1['name'] = job_obj.compid.name
            dict1['testid'] = test.objects.get(jobid = job_obj.id).id
            list0.append(dict1)
        
        return JsonResponse(list0,safe=False)

    elif request.method == 'POST':
        # serializer1 =  JobSerializer(data = request.data)
        data=request.data['data']
        jj=job(location=data['location'], jobname=data['jobname'],compid=company.objects.get(compid=data['compid']),description=data['description'],maxsalary=data['maxsalary'],minsalary=data['minsalary'],experience=data['experience'],jobdomain=data['jobdomain'],date=data['date'])
        jj.save()
        # if serializer1.is_valid():
        #     serializer1.save()
        #     print("stored in db")
        # else:
        #     print("error")
        #     return Response(None)
        return Response({'status_code':0,'status_msg':'Login Successfull','data':{'jobid':jj.id}})

@api_view(['GET','POST'])
def TestAction(request, format = None):
    if request.method == 'GET':
        comp_obj = test.objects.get(id = request.data['id'])
        dict0 = model_to_dict(comp_obj)
        que_objs = question.objects.filter(testid = request.data['id'])
        list3 = []
        dict1 = {}
        for q_obj in que_objs:
            dict1= model_to_dict(q_obj)
            opt_objs = option.objects.filter(qid = q_obj.id)
            dict2 = {}
            list5 = []
            for o_obj in opt_objs:
                dict2 = model_to_dict(o_obj)
                list5.append(dict2)
            dict1['options'] = list5
            list3.append(dict1)
        dict0['questions'] = list3
        return JsonResponse(dict0)

    elif request.method == 'POST':
        data=JSONParser().parse(request)['data']
        tesst=test(jsonData=data['jsonData'],jobid=job.objects.get(id=data['jobid']),instructions=data['instructions'])
        tesst.save()
        # test_obj = test()
        # test_obj.jobid = request.data['jobid']
        # test_obj.instructions = request.data['instructions']
        # test_obj.save()
        # test_obj = test.objects.all()
        # test_id = -1
        # for test_o in test_obj:
        #     test_id = test_o.id
        # questions_objs = request.data['questions']
        # for question_obj in questions_objs:
        #     q_obj = question()
        #     q_obj.testid = test_id
        #     q_obj.description = question_obj['description']
        #     q_obj.save()
        #     q_obj = question.objects.all()
        #     q_id = -1
        #     for q_o in q_obj:
        #         q_id = q_o.id
        #     correctopt = int(question_obj['correct']) - 1
        #     options_objs = question_obj['options']
        #     for i in range(len(options_objs)):
        #         option_obj = options_objs[i]
        #         o_obj = option()
        #         o_obj.qid = q_id
        #         o_obj.description = option_obj['description']
        #         if correctopt == i:
        #             o_obj.correct = True
        #         else:
        #             o_obj.correct = False
        #         o_obj.save()
        return Response({'status_code':0,'status_msg':'Test Created','data':{'testid':tesst.id}})

    
@api_view(['GET','POST'])
def QuestionAction(request, format = None):
    if request.method == 'GET':
        comp_obj = question.objects.filter(id = request.data['id'])
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