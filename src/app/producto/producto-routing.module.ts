import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'listado', component: ListadoComponent},
      {path:'ver/:id', component: ProductoComponent},
      {path:':id', component: ProductoComponent},
      {path:'**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
