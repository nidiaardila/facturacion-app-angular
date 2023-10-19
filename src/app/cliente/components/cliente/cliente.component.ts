import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { switchMap } from 'rxjs';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {


  cliente: Cliente = {
    fechaCreacion: new Date(),
    nombre: '',
    avatar: '',
    direccion: '',
    Telefono: '',
    email: '',
    id: ''
  };
  


  constructor(private activateRoute: ActivatedRoute,
              private clienteService: ClienteService,
              private router: Router){    
              }


  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.clienteService.getClienteId(id) )
    ).subscribe ( cliente => this.cliente = cliente);
    
  }

  
  updateCreate() {
    if (this.cliente && this.cliente.id) {
      // El cliente tiene un ID, entonces es una edición (update)
      this.clienteService.updateCliente(this.cliente).subscribe(
        response => {
          console.log('Cliente editado exitosamente', response);
          this.router.navigate(['/cliente']);
        },
        error => {
          console.error('Error al editar cliente', error);
        }
      );
    } else {
      // El cliente No tiene un ID, entonces es un cliente Nuevo (create)
      this.clienteService.createCliente(this.cliente).subscribe(
        cliente => {
          this.router.navigate(['/cliente'])
        }
      )
      console.log('Cliente creado')
    }
  }
  

}
