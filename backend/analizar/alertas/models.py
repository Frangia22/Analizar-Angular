from django.db import models

# Create your models here.
class Medidor(models.Model):
    idMedidor = models.AutoField(primary_key=True)
class Alertas(models.Model):
    idAlerta = models.AutoField(primary_key=True)
    medidor = models.ForeignKey(Medidor, on_delete=models.CASCADE)
    valor = models.FloatField()
    fechaAlta = models.DateTimeField()