from ipd.candidate.models import Candidate, Personality, Response
from rest_framework import serializers
from candidate.models import Candidate, Response, Personality

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ['cid', 'name', 'email', 'password', 'qualification',]

class ResponseSerializer(serializers.ModelSerializer):
	class Meta:
		model = Response
		fields = '__all__'

class PersonalitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Personality
		fields = '__all__'


