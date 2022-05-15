from django.urls import path
from . import views
import candidate
urlpatterns = [
    path('company/',views.CompanyAction),
    path('job/',views.JobAction),
    path('test/',views.TestAction),
    path('test/<int:id>',views.TestAction),
    path('question/',views.QuestionAction),
    path('option/',views.OptionAction),
    path('companies/',views.AllCompDetails),
    path('getUserResponse/<str:id>',candidate.views.CompanyPostingAction)
   
]