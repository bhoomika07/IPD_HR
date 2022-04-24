from rest_framework import serializers
from company.models import company, job, test, question, option

class companySerializer(serializers.ModelSerializer):
    class Meta:
        model = company
        fields = '__all__'

class jobSerializer(serializers.ModelSerializer):
	class Meta:
		model = job
		fields = '__all__'

class testSerializer(serializers.ModelSerializer):
	class Meta:
		model = test
		fields = '__all__'

class questionSerializer(serializers.ModelSerializer):
	class Meta:
		model = question
		fields = '__all__'

class optionSerializer(serializers.ModelSerializer):
	class Meta:
		model = option
		fields = '__all__'


