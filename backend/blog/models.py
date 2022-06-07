from distutils.command.upload import upload
from enum import unique
from pyexpat import model
from statistics import mode
from unicodedata import category
from django.db import models
from django.utils import timezone

# from matplotlib.pyplot import title
from autoslug import AutoSlugField
from django.conf import settings
# Create your models here.

class Category(models.Model):
    name=models.CharField(max_length=90)
    is_active=models.BooleanField(default=True)
    date_created=models.DateTimeField(auto_now_add=True)
    cover=models.ImageField(null=True,blank=True,upload_to='images/')

    def __str__(self): 
        return self.name

class Post(models.Model):
    class PostManager(models.Manager):
        def get_qureyset(self):
            return super().get_queryset().filter(status='published')

    options =(
    ('draft','Draft'),
    ('published','Published'),
    )

    title=models.CharField(max_length=120)
    category= models.ForeignKey(Category,on_delete=models.CASCADE)
    slug=AutoSlugField(populate_from='title',unique=True)
    publish_date=models.DateTimeField(default=timezone.now)
    author=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='blog_posts')
    content=models.TextField()
    status=models.CharField(max_length=10,choices=options,default='draft')
    objects=models.Manager()
    published_posts=PostManager()
    class Meta:
        ordering=('-publish_date',)
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self):
        return f"{self.title} by {self.author}"
    