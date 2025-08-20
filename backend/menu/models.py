from django.db import models

class MenuItem(models.Model):

    CATEGORY_CHOICES = [
        ('coffee', 'Coffee'),
        ('tea', 'Tea'),
        ('pastry', 'Pastry'),
        # Add more categories as needed
    ]
    
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    is_available = models.BooleanField(default=True)
    image = models.ImageField(upload_to='menu_images/', blank=True, null=True)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default='coffee'
    )

    

    def __str__(self):
        return self.name