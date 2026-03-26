from django.urls import path
from . import views

urlpatterns = [
    path('', views.register, name='register'),
    path('list/', views.users_list, name='users_list'),
]