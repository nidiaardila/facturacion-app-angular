import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  clientes: Cliente[]  = [];


  constructor (private clienteService: ClienteService) {}


  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(clientes => this.clientes = clientes);
  }

  // verDetalles(cliente: Cliente){
  //   console.log('Mostrando detalles del cliente: ', cliente)
  // }
  AgregarCliente(){

  }

  eliminar(){
    // this.clienteService.eliminar(this.clientes.id)
    // .subscribe ( resp => {
    //   console.log('eliminado')
    // })
  }

}