import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ClienteCardComponent } from './components/cliente-card/cliente-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './services/cliente.service';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        ClienteComponent,
        ListadoComponent,
        CrearComponent,
        BuscarComponent,
        ClienteCardComponent
    ],
    providers: [
        ClienteService
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        HttpClientModule,
        FormsModule,
        PrimeNgModule,
        SharedModule
    ]
})
export class ClienteModule { }
