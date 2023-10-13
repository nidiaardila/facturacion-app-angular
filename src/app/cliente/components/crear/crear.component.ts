import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit{

  cliente: Cliente = {
    fechaCreacion: new Date(),
    nombre:'',
    avatar:'',
    direccion:'',
    Telefono: '',
    email: '',
    id:''
  }

  constructor(private clienteService: ClienteService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}


  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return
    }
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.clienteService.getClienteId(id))
    )
    .subscribe(cliente=> this.cliente= cliente);
    
  }


  guardarCliente() {
    // Aquí puedes agregar la lógica para guardar el cliente
    console.log('Cliente guardado:', this.cliente);
  }


  guardarCambios(){

  }

  eliminar(){

  }

  

}
