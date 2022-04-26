from django.urls import path
from . import views
urlpatterns = [
    path('candidate/',views.CandidateAction),
    path('candidateLogin/',views.CandidateActionLogin),
    path('response/',views.ResponseAction),
    path('personality/',views.PersonalityAction)
]