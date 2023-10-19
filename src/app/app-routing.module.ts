import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoModule } from './producto/producto.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren:() => import ('./shared/shared.module').then (m => m.SharedModule)
  // },
  {
    path: 'producto',
    loadChildren:() => import ('./producto/producto.module').then (m => ProductoModule)
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
