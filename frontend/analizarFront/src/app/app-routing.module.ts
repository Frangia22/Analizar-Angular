import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqComponent } from './pages/faq/faq.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  //Acá van las distintas rutas
  /*path: define la ruta virtual de nuestra aplicación.
    component: define el componente que le dice al enrutador que componente corresponde al seleccionar dicha ruta.
   */
  {path: 'servicios', component:ServiciosComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'presentacion', component:PresentacionComponent},
  {path: '', redirectTo:'/presentacion', pathMatch:'full'},
  {path: '**', component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
