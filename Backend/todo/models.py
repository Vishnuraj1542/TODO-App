from django.db import models

# Create your models here.
class List(models.Model):
    title=models.CharField(max_length=40,null=True,blank=True)
    description=models.CharField(max_length=400,null=True,blank=True)
    completed = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
