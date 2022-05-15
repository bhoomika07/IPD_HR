from .models import Candidate, Personality, Response1
from rest_framework import serializers
from company.models import *

class CandidateLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ['cand_email' , 'cand_password',]

class CandidateDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response1
        fields = '__all__'

class PersonalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Personality
        fields = '__all__'
class Response1Serializer(serializers.ModelSerializer):
    comp_name=serializers.CharField(source='testid.jobid.compid.name')
    job_role=serializers.CharField(source='testid.jobid.jobdomain')
    job_date=serializers.CharField(source='testid.jobid.date')
    class Meta:
        model = Response1
        fields = '__all__'
class Response2Serializer(serializers.ModelSerializer):
    cand_name=serializers.CharField(source='cid.cand_name')
    job_role=serializers.CharField(source='testid.jobid.jobdomain')
    job_date=serializers.CharField(source='testid.jobid.date')
    class Meta:
        model = Response1
        fields = '__all__'

