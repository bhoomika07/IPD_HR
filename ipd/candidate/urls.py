from django.urls import path
from . import views
urlpatterns = [
    path('candidate/',views.CandidateAction.as_view()),
    path('response/',views.ResponseAction.as_view),
    path('personality',views.PersonalityAction.as_view)
]