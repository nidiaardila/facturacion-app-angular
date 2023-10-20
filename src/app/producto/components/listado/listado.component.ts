import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {


  productos: Producto [] = [];

  constructor(private productoService: ProductoService,
              private router: Router){ }


  ngOnInit(): void {
    this.getListadoProductos()
  }

  getListadoProductos(){
    this.productoService.getProductos()
    .subscribe(productos => this.productos = productos);
  }

  delete(producto: Producto){
    this.productoService.deleteProducto(producto.id)
    .subscribe(resp => {
      this.getListadoProductos();
    });
  }



}
