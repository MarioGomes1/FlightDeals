from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User

class TripWishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default="trip")
    fromAirportCode = models.CharField(max_length=50)
    toAirportCode = models.CharField(max_length=50)
    startDate = models.DateTimeField() #figure this out since it's getting it front the front end. I don't really need to store as date
    endDate = models.DateTimeField()
    lowestPrice = models.DecimalField(max_digits = 6, decimal_places = 2, null=False, blank=False, default= 100)
    highestPrice = models.DecimalField(max_digits = 6, decimal_places = 2, null=False, blank=False, default= 1000)
    
    def __str__(self) -> str:
        return self.name