from django.urls import path
from .views import CreateListApi

urlpatterns=[
    path('create/',CreateListApi.as_view(),name='create-list')
]

