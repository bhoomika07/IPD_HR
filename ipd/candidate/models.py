from django.db import models
from company.models import test
from candidate.cv_model import pdf_ocr_ml

# Create your models here.
class Candidate(models.Model):
    cand_name = models.CharField(max_length=200)
    cand_email = models.CharField(max_length=100, primary_key= True)
    cand_password = models.CharField(max_length=255)
    cand_qualification = models.CharField(max_length = 200)

class Response1(models.Model):
    score=models.IntegerField()
    cid = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    testid = models.ForeignKey(test, on_delete=models.CASCADE)
    if_selected = models.BooleanField(default=False)
    cv = models.FileField(upload_to='uploads/')
    linkedin = models.CharField(max_length=100)
    pending = models.BooleanField(default=True)
    suggested_role =""
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     resp_cv = self.cv
    #     output = pdf_ocr_ml(resp_cv)
    #     self.suggested_role = output

class Personality(models.Model):
    cid = models.ForeignKey('Candidate', on_delete=models.CASCADE)
    cand_personality = models.CharField(max_length=32)


