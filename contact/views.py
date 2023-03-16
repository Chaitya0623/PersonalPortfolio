from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import contact
from .serializers import ContactSerializer

from django.core.mail import send_mail

class ContactList(APIView):
    def get(self, request):
        Contacts = contact.objects.all()
        serializer = ContactSerializer(Contacts, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            emailData = request.data['email']
            send_mail(
                subject = "Thanks for Contacting",
                message = "Thanks for contacting Chaitya Shah's Website",
                from_email = 'chaityatest@gmail.com',
                recipient_list = [emailData,],
                fail_silently=False,
            )
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactDetail(APIView):
    def get(self, request, pk):
        Contacts = contact.objects.get(id=pk)
        serializer = ContactSerializer(Contacts, many=False)
        return Response(serializer.data)
    def post(self):
        pass