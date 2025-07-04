from django.urls import path
from .views import URLCreateView, redirect_view

urlpatterns = [
    path('create/', URLCreateView.as_view(), name='create_url'),
    path('<str:short_code>/', redirect_view, name='redirect'),
]
