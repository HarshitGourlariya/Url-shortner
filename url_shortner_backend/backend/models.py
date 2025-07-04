from django.db import models
import string
import random

def generate_short_code():
    length = 6
    chars = string.ascii_letters + string.digits
    return ''.join(random.choices(chars, k=length))

class URL(models.Model):
    original_url = models.URLField()
    short_code = models.CharField(max_length=15, unique=True, default=generate_short_code)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.original_url} -> {self.short_code}"
