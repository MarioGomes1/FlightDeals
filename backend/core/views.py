from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import TripWishList
from .serializers import TripWishListSerializer

# Create your views here.
@api_view()
def hello(request):
    trips = TripWishList.objects.all()
    print(trips)
    serializer = TripWishListSerializer(trips, many = True)
    return Response(serializer.data)