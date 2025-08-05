from django.shortcuts import render,HttpResponse
from rest_framework.views import APIView
from .models import List
from rest_framework import status
from rest_framework.response import Response
from .serializers import ListSerializer


# Create your views here.
class CreateListApi(APIView):
    def post(self,request):
        serializer=ListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED )
        return Response(serializer.error,status = status.HTTP_400_BAD_REQUEST)