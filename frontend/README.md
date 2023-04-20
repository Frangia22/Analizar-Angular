# Desplegar Angular en su ordenador
1. Clonar el repo
``` 
git clone https://github.com/Frangia22/Analizar-Angular.git
```
2. Ingresar a la carpeta del proyecto, seria en la que esta el *src*, *angular.json*, *package.json* se ubican ahí para ejecutarlo. En mi caso, hice cd frontend/analizarFront/
```
npm install
```
3. Una vez instaladas las dependecias les va a aparecer la carpeta node_modules, solo resta que ejecuten la app Angular y listo es todo.
```
ng serve -o
```




# Instalar Bootstrap y integrar con angular

1. **npm install bootstrap bootsrap-icons** --> Dentro de la carpeta donde creaste la app, es decir donde esta ubicada la carpeta node_modules, src y archivos package.json, angular.json entre otros

2. Ingreso al archivo **angular.json** , busco la linea *styles* y *scripts* y agrego lo siguiente:
          ```
          -  "styles": [
              ***"node_modules/bootstrap/dist/css/bootstrap.css",***
              ***"node_modules/bootstrap-icons/font/bootstrap-icons.css",***
              "src/styles.css"
            ],
          -  "scripts": [
              ***"node_modules/bootstrap/dist/js/bootstrap.min.js"***
            ]
            ```
3. Ejecutar **ng serve -o** y listo se integro bootstrap


*Si ven que no lo toma, ingresar al archivo styles.css y agregar la siguiente linea: ***@import "~bootstrap/dist/css/bootstrap.css";*** *
**De igual manera hay otras formas de integrarlo esta es la más facil**

# Crear modulos
1. **ng g m layout** --> Creo el modulo layout donde iran los componentes header, nav, footer
2.  **ng g m pages** --> Creo el modulo pages donde iran los componentes de la web por ejemplo: quienes somos, contacto, entre otros

# Crear componentes
1. **ng g c layout/nav** --> Creo el componente del menú de navegación
2. **ng g c layout/header**
3. **ng g c layout/footer**

# Exportar componentes creados

1. Ingreso al archivo **module.ts** del modulo creado
2. Agrego la linea
``` 
  exports: [
    //Coloco los componentes que quiero exportar
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
```
**Recordar haber importado el componente al principio del documento, si tiene la extesión en el visual cuando en el exports tipeen el nombre del componente automaticamente lo importara**

# Importar componente en el app.module.ts o en otro modulo

1. Ingreso al **app.module.ts**
2. Busco la linea imports y agrego el nombre del modulo a importar
``` 
  imports: [
    //Colocar el modulo a importar
    BrowserModule,
    LayoutModule,
    PagesModule,
    AppRoutingModule
  ],
```
**Recordar haber importado el modulo al principio del documento**

# Crear modulo de rutas

*Si no lo instale cuando inicie el proyecto debo realizar apartir del paso 1 sino comenzar desde el 4*
1. Ejecutar el comando: **ng g m app-routing.module.ts**
2. Editar el módulo creado anteriormente para que quede de la siguiente manera:

``` 
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    const routes: Routes = [
      //Acá van las distintas rutas
      /*path: define la ruta virtual de nuestra aplicación.
        component: define el componente que le dice al enrutador que componente corresponde al seleccionar dicha ruta.
      */
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
``` 
3. En el archivo **app.module.ts** importar el modulo de rutas creado
```
  import { AppRoutingModule } from './app-routing.module';
// Esta va dentro del @NgModule
  imports: [
    BrowserModule,
    LayoutModule,
    PagesModule,
    AppRoutingModule
  ],
```

4. Configurar las rutas de la aplicación

Para ello ir al **app.module.ts**, importar los distintos componentes de la pagina y luego definir la rutas virtuales en el array **routes**

![imagen](https://user-images.githubusercontent.com/56803807/233462164-e86d324d-af86-423c-be6e-b588aef33f5e.png)


```
- path: define la ruta virtual de nuestra aplicación.
- component: define el componente que le dice al enrutador que componente corresponde al seleccionar dicha ruta.
```

5. Importar en los otros modulos el modulo routing, es decir en el pages ir y importarlo

6. Por ultimo para indicarle por ejemplo al nav a que ruta virtual tiene que ir, debo ingresar al nav y en item servicios por ejemplo agregar la etiqueta **routerLink="rutaVirtualDefinida"**

![imagen](https://user-images.githubusercontent.com/56803807/233462334-4140931f-f990-409e-98fb-b238602253e3.png)
