from rest_framework import serializers
from django.contrib.auth.models import User
from . models import *

class TripWishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripWishList
        fields = '__all__'

