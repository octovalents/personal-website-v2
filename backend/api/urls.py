from django.urls import path
from .views import MyView

urlpatterns = [
    path('myview/', MyView.as_view(), name='myview'),
]
