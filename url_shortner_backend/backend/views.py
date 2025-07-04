from rest_framework import generics
from .models import URL
from .serializers import URLSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, redirect
from rest_framework.response import Response

class URLCreateView(generics.CreateAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer

@api_view(['GET'])
def redirect_view(request, short_code):
    url = get_object_or_404(URL, short_code=short_code)
    return redirect(url.original_url)
