from django.urls import path
from . import views
urlpatterns = [
    path('company/',views.CompanyAction.as_view()),
    path('job/',views.JobAction.as_view()),
    path('test/',views.TestAction.as_view()),
    path('question/',views.QuestionAction.as_view()),
    path('option/',views.OptionAction.as_view()),
   
]