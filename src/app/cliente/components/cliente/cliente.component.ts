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

  cliente!: Cliente;


  constructor(private activateRoute: ActivatedRoute,
              private clienteService: ClienteService,
              private router: Router){}


  // ngOnInit(): void {
  //   this.activateRoute.params.pipe(
  //     switchMap(({ id }) => this.clienteService.getClienteId(id) )
  //   ).subscribe ( cliente => this.cliente = cliente);
    
  // }

}
