import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertasComponent } from './alertas/alertas.component';



@NgModule({
  declarations: [
    PresentacionComponent,
    Pagina404Component,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AlertasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  exports: [
    PresentacionComponent,
    Pagina404Component, 
    HomeComponent, 
    LoginComponent,
    DashboardComponent, 
    AlertasComponent
  ]
})
export class PagesModule { }
