
from django.urls import path
from .views import create_item
from .views import register_user
from .views import login_user
from .views import get_list
from .views import search_products
urlpatterns = [
    path('create/', create_item, name='create_item'),
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('get-list/', get_list, name='get_list'),
    path('search/', search_products, name='search_products'),

]
