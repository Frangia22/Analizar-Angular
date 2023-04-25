import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { FaqComponent } from './faq/faq.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from '../app-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ServiciosComponent,
    FaqComponent,
    ContactoComponent,
    PresentacionComponent,
    Pagina404Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ServiciosComponent,
    FaqComponent,
    ContactoComponent,
    PresentacionComponent,
    Pagina404Component, 
    HomeComponent
  ]
})
export class PagesModule { }
