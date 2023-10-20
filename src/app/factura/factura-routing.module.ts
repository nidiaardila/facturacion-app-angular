import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { FacturaComponent } from './components/factura/factura.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'listado', component: ListadoComponent},
      {path: 'ver/:id', component: FacturaComponent},
      {path: ':id', component: FacturaComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
