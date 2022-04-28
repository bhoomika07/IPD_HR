from http.client import ResponseNotReady
from urllib import response
from django import dispatch
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib.auth.hashers import make_password,check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Candidate, Response1, Personality
from .serializers import CandidateLoginSerializer, CandidateDetailsSerializer, ResponseSerializer, PersonalitySerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from candidate.cv_model import pdf_ocr_ml

@api_view(['POST'])
def CandidateActionLogin(request):
    if request.method == 'POST':
        comp_obj = Candidate.objects.filter(cand_email = request.data['data']['cand_email'])
        if comp_obj.exists():
            if check_password(request.data['data']['cand_password'], comp_obj[0].cand_password):
                return Response({'status_code':0,'status_msg':'Login Successfull'})
            else:
                return Response({'status_code':1,'status_msg':'Incorrect password'})
        else:
            return Response({'status_code':2,'status_msg':'User Dosnt exisits'})

@api_view(['GET','POST'])
def CandidateAction(request):
    if request.method == 'POST':
        req=request.data['data']
        candidate=Candidate(cand_email=req['cand_email'],cand_password=make_password(req['cand_password']),cand_qualification=req['cand_qualification'],cand_name=req['cand_name'])
        candidate.save()
        return Response({'status_code':0,'status_msg':'Register Successfull'})

@api_view(['GET','POST'])
@csrf_exempt 
def ResponseAction(request, format = None):
    if request.method == 'GET':
        resp_objs = Response1.objects.filter(**request.data)
        list0 = []
        for resp_obj in resp_objs:
            dict1 = model_to_dict(resp_obj)
            candname = Candidate.objects.get(cand_email = resp_obj.cid)
            dict1['cand_name'] = candname
            list0.append(dict1)

        return JsonResponse(list0,safe=False)


    elif request.method == 'POST':
        serializer1 =  ResponseSerializer(data = request.data)
        if serializer1.is_valid():
            serializer1.save()
            print("stored in db")
            resp_obj = Response1.objects.get(cid=request.data['cid'])
            resp_cv = resp_obj.cv
            output = pdf_ocr_ml(resp_cv)
            resp_obj.suggested_role = output
            
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
    

    
