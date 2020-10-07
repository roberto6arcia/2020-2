import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditoRegistroComponent } from './creditofinanciero/credito-registro/credito-registro.component';
import { CreditoConsultaComponent } from './creditofinanciero/credito-consulta/credito-consulta.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: 'creditoConsulta',
  component: CreditoConsultaComponent
  },
  {
    path: 'creditoRegistro',
    component: CreditoRegistroComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
