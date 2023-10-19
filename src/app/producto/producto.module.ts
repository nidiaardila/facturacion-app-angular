import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoService } from './services/producto.service';


@NgModule({
  declarations: [
    ListadoComponent,
    ProductoComponent
  ],
  providers: [
    ProductoService
 ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    HttpClientModule,
    FormsModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class ProductoModule { }
