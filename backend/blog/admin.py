from django.contrib import admin

from blog.models import Category, Post

# Register your models here.



class AuthorAdmin(admin.ModelAdmin):
    list_display = ('title','slug','author','status')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name','date_created')

admin.site.register(Post,AuthorAdmin)
admin.site.register(Category,CategoryAdmin)