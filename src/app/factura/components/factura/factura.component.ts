import { Component } from '@angular/core';
import { Factura } from '../../interfaces/factura.interface';
import { FacturaService } from '../../services/factura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ClienteService } from '../../../cliente/services/cliente.service';
import { Cliente } from 'src/app/cliente/interfaces/cliente.interface';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {

  clientes : Cliente[]= [];


  factura: Factura = {
  createdAt: new Date(),
  folio: '',
  empresa: '',
  rut: '',
  cliente: {
    fechaCreacion: new Date(),
    nombre: '',
    avatar: '',
    direccion: '',
    Telefono: '',
    email: '',
    id: ''
  },
  items: [],
  subtotal: 0,
  iva: 0,
  total: 0,
  id: ''
};

  constructor(private activateRoute: ActivatedRoute,
              private facturaService: FacturaService,
              private clienteService: ClienteService,
              private router: Router){

  }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.facturaService.getFacturaId(id) )
    ).subscribe ( factura => this.factura = factura);

    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes; // Guarda la lista de clientes en una propiedad
    })
    
  }

  updateCreate(){

  }




}


