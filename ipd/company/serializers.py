from .models import company,job, test, question, option
from rest_framework import serializers

class CompanyLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = company
        fields = ['compid' , 'password']

class CompanyDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = company
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = job
        fields = '__all__'

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = test
        fields = '__all__'

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = test
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = question
        fields = '__all__'

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = option
        fields = '__all__'
