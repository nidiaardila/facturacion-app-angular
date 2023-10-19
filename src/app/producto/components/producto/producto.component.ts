import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { switchMap } from 'rxjs';
import { Cliente } from '../../../cliente/interfaces/cliente.interface';
import { Producto } from '../../interfaces/producto.interface';
import { ClienteService } from '../../../cliente/services/cliente.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {


  producto: Producto = {
    createdAt: new Date(),
    nombre: '',
    avatar:'',
    descripcion:'',
    precioCompra:'',
    precioVenta:'',
    id:'',

  }

  constructor(private activateRoute: ActivatedRoute,
              private productoService: ProductoService,
              private router: Router){}

  
 ngOnInit(): void {
  this.activateRoute.params.pipe(
    switchMap(({ id }) => this.productoService.getProductoId(id))
  ).subscribe ( producto => this.producto = producto);

 }


 updateCreate(){
    if(this.producto && this.producto.id){
       // El producto tiene un ID, entonces es una edición (update)
       this.productoService.updateProducto(this.producto).subscribe(
        resp => {
          console.log('Producto editado exitosamente', resp);
          this.router.navigate(['/producto']);
        },
        error => {
          console.error('Error al editar producto', error);
        }
       );
    }else {
       // El producto No tiene un ID, entonces es un producto Nuevo (create)
       
    }
 }


 
//    else {
    
//     this.clienteService.createCliente(this.cliente).subscribe(
//       cliente => {
//         this.router.navigate(['/cliente'])
//       }
//     )
//     console.log('Cliente creado')
//   }
// }



}
