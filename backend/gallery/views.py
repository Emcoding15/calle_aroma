from django.shortcuts import render
from rest_framework import generics
from .models import GalleryImage
from .serializers import GalleryImageSerializer

class GalleryImageListCreateView(generics.ListCreateAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer