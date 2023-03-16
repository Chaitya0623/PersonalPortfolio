from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class contact(models.Model):
    username = models.CharField(max_length=20)
    number = models.CharField(max_length=10, blank=False)
    email = models.EmailField(unique=True)
    message = models.CharField(max_length=100)

    def __str__(self):
        return self.email