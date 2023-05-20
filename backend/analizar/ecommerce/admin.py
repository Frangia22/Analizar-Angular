from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Productos)#Registro modelo
class ProductosAdmin(admin.ModelAdmin):#Creo clase para definir los campos a mostrar de dicho modelo
    list_display = ['nombre', 'precio', 'cantidadDisponible', 'categorias']

