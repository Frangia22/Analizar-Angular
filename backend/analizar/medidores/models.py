from django.db import models

# Create your models here.
class User(models.Model):
    idUser = models.AutoField(primary_key=True)
class Medidores(models.Model):
    idMedidor = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=45)
    detalle = models.CharField(max_length=45)
    identificador = models.CharField(max_length=45)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
