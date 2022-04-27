from .models import Candidate, Personality, Response1
from rest_framework import serializers

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

