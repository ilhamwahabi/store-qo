# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import status
from stores.serializers import *
from django_filters.rest_framework import DjangoFilterBackend

class StoreViewSet(viewsets.GenericViewSet):
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('type',)

    def list(self, request):
        queryset = self.get_queryset()
        filtered_queryset = self.filter_queryset(queryset)
        page = self.paginate_queryset(filtered_queryset)
        if page is not None:
            serializer = StoreSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        # Never happen when we use pagenumber pagination
        return Response()


    def retrieve(self, request, pk=None):
        queryset = self.get_queryset()
        object = get_object_or_404(queryset, pk=pk)
        serializer = StoreSerializer(object)
        return Response(serializer.data)

    def get_queryset(self):
        return Store.objects.all()