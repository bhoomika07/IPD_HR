from django.urls import path
from . import views
urlpatterns = [
    path('company/',views.CompanyAction),
    path('job/',views.JobAction),
    path('test/',views.TestAction),
    path('question/',views.QuestionAction),
    path('option/',views.OptionAction),
    path('companies',views.AllCompDetails)
   
]