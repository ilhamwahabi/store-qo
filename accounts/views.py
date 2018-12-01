# -*- coding: utf-8 -*-
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from accounts.models import *
from django.shortcuts import render
from accounts.serializers import *

# Create your views here.
class RegisterUser(APIView):

    def post(self, request, format=None):
        data = request.data
        serializer = AccountSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
