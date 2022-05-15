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
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from candidate.cv_model import pdf_ocr_ml
from company.models import company
from company.serializers import *

@api_view(['POST'])
def CandidateActionLogin(request):
    if request.method == 'POST':
        comp_obj = Candidate.objects.filter(cand_email = request.data['data']['cand_email'])
        if comp_obj.exists():
            if check_password(request.data['data']['cand_password'], comp_obj[0].cand_password):
                return Response({'status_code':0,'comp':0,'status_msg':'Login Successfull','data':CandidateDetailsSerializer(comp_obj,many=True).data})
            else:
                return Response({'status_code':1,'status_msg':'Incorrect password'})
        else:
            comp_obj = company.objects.filter(compid = request.data['data']['cand_email'])
            if(comp_obj.exists()):
                if check_password(request.data['data']['cand_password'], comp_obj[0].comp_password):
                    return Response({'status_code':0,'comp':1,'status_msg':'Login Successfull','data':CompanyDetailsSerializer(comp_obj,many=True).data})
                else:
                    return Response({'status_code':1,'status_msg':'Incorrect password'})
            return Response({'status_code':2,'status_msg':'User Dosnt exisits'})

@api_view(['GET','POST'])
def CandidateAction(request):
    if request.method == 'POST':
        req=request.data['data']
        candidate=Candidate(cand_email=req['cand_email'],cand_password=make_password(req['cand_password']),cand_qualification=req['cand_qualification'],cand_name=req['cand_name'])
        candidate.save()
        return Response({'status_code':0,'status_msg':'Register Successfull'})
@api_view(['GET'])
def CandidatePostingAction(request,id=''):
    if request.method == 'GET':
        userR=Response1.objects.filter(cid=Candidate.objects.get(cand_email=id))
        if userR.exists:
            userR=Response1Serializer(userR,many=True).data
        # candidate=Candidate(cand_email=req['cand_email'],cand_password=make_password(req['cand_password']),cand_qualification=req['cand_qualification'],cand_name=req['cand_name'])
        # candidate.save()
        return Response({'data':userR})
@api_view(['GET'])
def CompanyPostingAction(request,id=''):
    if request.method == 'GET':
        response1=Response1.objects.filter(compid=company.objects.get(compid=id))
        userR=Response2Serializer(response1,many=True).data
        return Response({'data':userR})

@api_view(['POST'])
def CompanyPostingUpdateAction(request,id=0):
    if request.method == 'POST':
        req=request.data['data']
        response1=Response1.objects.get(id=id)
        response1.if_selected=req['flag']
        response1.pending=True
        response1.save()
        return Response({'status_code':0,'stats_msg':'Updated Successfully'})


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
            resp_obj = Response1.objects.filter(cid=request.data['cid'],testid=request.data['testid'])
            if not resp_obj.exists():
                serializer1.save()
            resp_obj=resp_obj[0]
            resp_cv = resp_obj.cv
            output = pdf_ocr_ml(resp_cv)
            resp_obj.suggested_role = output
            resp_obj.save()         
            
        else:
            return Response('h')
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
@api_view(['GET'])
def checkCandidateResult( request, tid='',cid=''):
    if request.method == 'GET':
        res_obj = Response1.objects.filter(testid=test.objects.get(id=tid),cid=Candidate.objects.get(cand_email=cid))
        if res_obj.exists():
            return Response({'status':1,'if_selected':res_obj[0].if_selected,'pending':res_obj[0].pending})
        else:
            return Response({'status':0})

                  
    

    
