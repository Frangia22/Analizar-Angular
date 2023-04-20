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
