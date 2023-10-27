import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { Router } from '@angular/router';

import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  clientes: Cliente[]  = [];
  

  constructor (private clienteService: ClienteService,
               private router: Router,
               ) {}


  ngOnInit(): void {
   this.getListadoClientes()
  }


  getListadoClientes(){
    this.clienteService.getClientes()
    .subscribe(clientes => this.clientes = clientes);
  }


  delete(cliente: Cliente){
    this.clienteService.deleteCliente(cliente.id)
    .subscribe( resp => { this.getListadoClientes()})
  }


}