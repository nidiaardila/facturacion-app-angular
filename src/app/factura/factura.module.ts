import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { FacturaComponent } from './components/factura/factura.component';
import { ListadoComponent } from './components/listado/listado.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { FacturaService } from './services/factura.service';
import { ClienteModule } from '../cliente/cliente.module';
import { ProductoModule } from '../producto/producto.module';


@NgModule({
  declarations: [
    FacturaComponent,
    ListadoComponent
  ],
  providers: [
    FacturaService
 ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    HttpClientModule,
    SharedModule,
    PrimeNgModule,
    
  ]
})
export class FacturaModule { }
