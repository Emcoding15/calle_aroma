from django.urls import path
from .views import MenuItemListCreateView

urlpatterns = [
    path('menu-items/', MenuItemListCreateView.as_view(), name='menuitem-list-create'),
]