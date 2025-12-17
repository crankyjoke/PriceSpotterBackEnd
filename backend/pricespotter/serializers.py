# pricespotter/serializers.py

from rest_framework import serializers
from .models import Item
from .models import User

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = [
            'itemName',
            'itemPrice',
            'itemQuantity',
            'itemLocation',
            'itemImage',
            'itemPriceCurrency',
            "date",
            "itemDescription"
        ]
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name','password']
from .models import Product
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description']