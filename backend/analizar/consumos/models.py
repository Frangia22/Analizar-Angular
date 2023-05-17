from django.db import models

# Create your models here.
class Medidor(models.Model):
    idMedidor = models.AutoField(primary_key=True)
class Consumos(models.Model):
    idConsumos = models.AutoField(primary_key=True)
    medidor = models.ForeignKey(Medidor, on_delete=models.CASCADE)
    fechaMedicion = models.DateTimeField()
    consumo = models.FloatField()