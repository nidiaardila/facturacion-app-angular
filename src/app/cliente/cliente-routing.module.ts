import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  {
    path:'',
    // component: ListadoComponent,
    children:[
      {path: 'listado', component: ListadoComponent},
      {path: 'ver/:id', component: ClienteComponent},
      {path: ':id', component: ClienteComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
