from ctypes import c_void_p
from http.client import ResponseNotReady
from importlib.machinery import SourcelessFileLoader
import json
from msilib.schema import File
from unicodedata import name
from urllib import response
from xml.etree.ElementTree import XMLParser
from django import dispatch
import json
import os
from django.core.files.base import ContentFile
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib.auth.hashers import make_password,check_password
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser,MultiPartParser, FormParser, FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from requests_toolbelt.multipart import decoder
from scipy.fftpack import cc_diff
from sklearn.metrics import SCORERS
import base64
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

def findstr(pa2, str1):
        findex = pa2.index(str1)+len(str1) + 9
        lindex = pa2.index('\\',findex)
        tempstr = pa2[findex:lindex]
        return tempstr

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


# @api_view(['GET','POST'])
# @parser_classes([FormParser, MultiPartParser])
# @csrf_exempt 
class ResponseAction(APIView):
    # parser_classes = [FormParser, MultiPartParser]
    @csrf_exempt
    def get(self, request, *args, **kwargs):
        resp_objs = Response1.objects.all()
        # resp_objs = Response1.objects.filter(**request.data)
        list0 = []
        print(os.getcwd())
        for resp_obj in resp_objs:
            dict1 = model_to_dict(resp_obj)
            # candname = Candidate.objects.get(cand_email = resp_obj.cid)
            # dict1['cand_name'] = candname
            strtemp = dict1['cv'].url
            strtemp = strtemp.replace('\\','/')
            strtemp = os.getcwd().replace('\\','/') + strtemp
            print(strtemp)
            dict1['cv'] = strtemp
            list0.append(dict1)

        return JsonResponse(list0,safe=False)

    @csrf_exempt
    def post(self, request, *args, **kwargs):
        strw=os.getcwd()
        strw=strw.replace('\\',"/")
        strw = strw + '/'
        print(strw)
        # pa = str(request.data)
        # pa4 = pa.split('\\r\\n')
        # print(pa4)
        # dict1 = {}
        # dict1['cid'] = findstr(pa,'cid')
        # dict1['testid'] = findstr(pa,'testid')
        # dict1['linkedin'] = findstr(pa,'linkedin')
        # dict1['score'] = findstr(pa,'score')
        # # dict1['cv'] = findstr(pa,'cv')
        # dict1['compid'] = findstr(pa,'compid')
        # print(request.data)
        # print()
        # print(dict1)
        # print(findstr(pa,'cv'))
        # print(request.data['cv'])
        # serializer1 =  ResponseSerializer(data = request.data)  
        # print(request._request.FILES)
        dict1 = request.data
        encoded_string = str(request.data['cv'])[request.data['cv'].index(',')+1:]
        file_64_decode = base64.b64decode(encoded_string) 
        file_result = ContentFile(file_64_decode, name = request.data['filename'])
        # file_result = open(request.data['filename'], 'wb') 
        # file_result.write(file_64_decode)
        # strtemp =  request.data['filename']
        dict1['cv'] = file_result
        del dict1['filename']
        print(dict1)
        serializer1 =  ResponseSerializer(data = dict1) 
        # dict1['cv'] = theFile.write(base64.b64decode(base64String.split(",")[1:2]))
        # print(request.data['filename'])
        if serializer1.is_valid():
            resp_obj = Response1.objects.filter(cid=request.data['cid'],testid=request.data['testid'])
            if not resp_obj.exists():
                serializer1.save()
            print("stored")   
            
        else:
            print(serializer1.errors)
            return Response(serializer1.data)
        return HttpResponse('hi')

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

                  
    

    
