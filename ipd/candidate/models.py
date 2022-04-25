from django.db import models
from company.models import test
# Create your models here.
class Candidate(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100, primary_key= True)
    password = models.CharField(max_length=32)
    qualification = models.CharField(max_length = 200)

class Response1(models.Model):
    cid = models.ForeignKey('Candidate', on_delete=models.CASCADE)
    testid = models.ForeignKey(test, on_delete=models.CASCADE)
    selected = models.BooleanField(default=False)
    cv = models.FileField(upload_to='uploads/')
    linkedin = models.CharField(max_length=100)
    pending = models.BooleanField(default=True)

class Personality(models.Model):
    cid = models.ForeignKey('Candidate', on_delete=models.CASCADE)
    personality = models.CharField(max_length=32)


