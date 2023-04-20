# Desplegar Angular en su ordenador

# Instalar Bootstrap y integrar con angular

1. **npm install bootstrap bootsrap-icons** --> Dentro de la carpeta donde creaste la app, es decir donde esta ubicada la carpeta node_modules, src y archivos package.json, angular.json entre otros

2. Ingreso al archivo **angular.json** , busco la linea *styles* y *scripts* y agrego lo siguiente:
          -  "styles": [
              ***"node_modules/bootstrap/dist/css/bootstrap.css",***
              ***"node_modules/bootstrap-icons/font/bootstrap-icons.css",***
              "src/styles.css"
            ],
          -  "scripts": [
              ***"node_modules/bootstrap/dist/js/bootstrap.min.js"***
            ]
3. Ejecutar **ng serve -o** y listo se integro bootstrap


*Si ven que no lo toma, ingresar al archivo styles.css y agregar la siguiente linea: ***@import "~bootstrap/dist/css/bootstrap.css";*** *
**De igual manera hay otras formas de integrarlo esta es la más facil**