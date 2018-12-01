from django.conf.urls import url, include
from accounts.views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^signup/$', RegisterUser.as_view()),
    url(r'^login/$', obtain_jwt_token),
]