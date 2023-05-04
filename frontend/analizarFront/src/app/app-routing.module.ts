import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AuthGuard } from './service/authGuard.service';


const routes: Routes = [
  //Acá van las distintas rutas
  /*path: define la ruta virtual de nuestra aplicación.
    component: define el componente que le dice al enrutador que componente corresponde al seleccionar dicha ruta.
   */
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'alertas', component: AlertasComponent, canActivate: [AuthGuard]},
  {path: '**', component:Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
