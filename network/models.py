from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Post(models.Model):
    title=models.CharField(max_length=255)
#    title_tag=models.CharField(max_length=255)
    author=models.ForeignKey(User, on_delete=models.CASCADE)
    body=models.TextField()

    def __str__(self):
        return self.title + ' : ' + str(self.author)

class Like(models.Model):
    pass

class Follower(models.Model):
    pass