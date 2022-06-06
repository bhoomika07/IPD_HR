from distutils.archive_util import make_zipfile
from django.db import models
from numpy import require
from candidate.cv_model import pdf_ocr_ml
from company.models import *

# Create your models here.
class Candidate(models.Model):
    cand_name = models.CharField(max_length=200)
    cand_email = models.CharField(max_length=100, primary_key= True)
    cand_password = models.CharField(max_length=255)
    cand_qualification = models.CharField(max_length = 200)

class Response1(models.Model):
    score=models.IntegerField()
    compid=models.ForeignKey(company, on_delete=models.CASCADE,null=True,blank=True)
    cid = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    testid = models.ForeignKey(test, on_delete=models.CASCADE)
    if_selected = models.BooleanField(default=False)
    cv = models.FileField(upload_to='uploads/', null = True)
    linkedin = models.CharField(max_length=100)
    pending = models.BooleanField(default=False)
    suggested_role = models.CharField(max_length=2000, null=True)
    cand_personality = models.CharField(max_length=2000, null = True)
    topfive_personality = models.TextField(null = True)
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    # #     resp_cv = self.cv.url
    # #     index1 = (resp_cv.index('/',1))
    # #     resp_cv = resp_cv[0:index1] + '/uploads' + resp_cv[index1:]
    #     output = pdf_ocr_ml(self.cv)
    #     self.suggested_role = output[0]

class Personality(models.Model):
    cid = models.ForeignKey('Candidate', on_delete=models.CASCADE)
    cand_personality = models.CharField(max_length=100)


