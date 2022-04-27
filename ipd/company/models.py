from django.db import models

# Create your models here.
class company(models.Model):
    compid = models.CharField(primary_key=True, max_length=200)
    name = models.CharField(max_length=50)
    about = models.CharField(max_length=1000)
    comp_password = models.CharField(max_length=20)

class job(models.Model):
    jobname = models.CharField(max_length=100)
    date = models.DateField()
    compid = models.ForeignKey('company', on_delete=models.CASCADE)
    jobdomain = models.CharField(max_length=50)
    experience = models.IntegerField()
    minsalary = models.IntegerField()
    maxsalary = models.IntegerField()
    description = models.CharField(max_length=1000)
    active = models.BooleanField(default=True)
    location = models.CharField(max_length=100)

class test(models.Model):
    jobid = models.ForeignKey('job', on_delete=models.CASCADE)
    instructions = models.CharField(max_length=1000)

class question(models.Model):
    description = models.CharField(max_length=1000)
    testid = models.ForeignKey('test', on_delete=models.CASCADE)

class option(models.Model):
    qid = models.ForeignKey('question',on_delete=models.CASCADE)
    description = models.CharField(max_length=50)
    correct = models.BooleanField(default = False)
    