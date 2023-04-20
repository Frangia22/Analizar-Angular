# Desplegar Angular en su ordenador

# Instalar Bootstrap y integrar con angular
1. npm install bootstrap --> Dentro de la carpeta donde creaste la app, es decir donde esta ubicada la carpeta node_modules, src y archivos package.json, angular.json entre otros

2. Ingreso al archivo **angular.json** , busco la linea *styles* y *scripts* y agrego lo siguiente:
            "styles": [
              ***"node_modules/bootstrap/dist/css/bootstrap.css",***
              "src/styles.css"
            ],
            "scripts": [
              ***"node_modules/jquery/dist/jquery.slim.min.js",***
              ***"node_modules/popper.js/dist/umd/popper.min.js",***
              ***"node_modules/bootstrap/dist/js/bootstrap.min.js"***
            ]