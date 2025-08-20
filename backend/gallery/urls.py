from django.urls import path
from .views import GalleryImageListCreateView

urlpatterns = [
    path('gallery-images/', GalleryImageListCreateView.as_view(), name='galleryimage-list-create'),
]