import datetime

from django.db import models

# Create your models here.
from django.db import models
from django.utils.formats import date_format
from django.db import models


def get_current_time():
    return datetime.timezone
class Item(models.Model):
    itemName = models.CharField(max_length=100)
    itemPrice = models.DecimalField(max_digits=10, decimal_places=2)
    itemQuantity = models.PositiveIntegerField()
    itemLocation = models.CharField(max_length=100)
    itemPriceCurrency = models.CharField(max_length=100,default='CAD')
    date = models.DateField(auto_now_add=True)
    itemImage = models.ImageField(upload_to='item_images/', null=True, blank=True)
    itemDescription = models.CharField(max_length=9999,default = "")

    def __str__(self):
        return self.itemName

class User(models.Model):

    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username


# models.py
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
