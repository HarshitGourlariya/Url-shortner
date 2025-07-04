from rest_framework import serializers
from .models import URL  # use relative import

class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['id', 'original_url', 'short_code', 'created_at']
