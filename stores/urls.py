from django.conf.urls import url, include
from stores.views import *
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers

store_router = routers.SimpleRouter()
store_router.register(r'stores', StoreViewSet, base_name='stores')

urlpatterns = [
    url(r'', include(store_router.urls)),
]