import { Component } from '@angular/core';
import { Factura } from '../../interfaces/factura.interface';
import { FacturaService } from '../../services/factura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ClienteService } from '../../../cliente/services/cliente.service';
import { Cliente } from 'src/app/cliente/interfaces/cliente.interface';
import { Producto } from 'src/app/producto/interfaces/producto.interface';
import { ProductoService } from 'src/app/producto/services/producto.service';




@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {


  clientes : Cliente[]= [];

  items : Producto[]= [];

  productosSeleccionados: Producto[] = [];

  productoSeleccionado: Producto | null = null;

  cantidadProductos: { [productoId: string]: number } = {};



  
  // seleccionarProducto(producto: Producto) {
  //   // Verifica si el producto ya está en la lista de seleccionados
  //   if (!this.productosSeleccionados.includes(producto)) {
  //     this.productosSeleccionados.push(producto);
  //   }
  // }
  seleccionarProducto(producto: Producto) {
    // Agregar el producto a la lista de seleccionados
    this.productosSeleccionados.push(producto);
  
    // Establecer la cantidad predeterminada en 1
    this.cantidadProductos[producto.id] = 1;
  }
  


  isProductoSelected(item: Producto): boolean {
    return this.productosSeleccionados.some(selectedItem => selectedItem.id === item.id);
  }

  
  // toggleProductoSelection(item: Producto): void {
  //   if (this.isProductoSelected(item)) {
  //     this.productosSeleccionados = this.productosSeleccionados.filter(selectedItem => selectedItem.id !== item.id);
  //   } else {
  //     this.productosSeleccionados.push(item);
  //   }
  // }

  toggleProductoSelection(item: Producto): void {
    if (this.isProductoSelected(item)) {
      this.productosSeleccionados = this.productosSeleccionados.filter(selectedItem => selectedItem.id !== item.id);
      delete this.cantidadProductos[item.id]; // Elimina la cantidad del producto
    } else {
      this.productosSeleccionados.push(item);
      this.cantidadProductos[item.id] = 1; // Establece la cantidad en 1 si se agrega un producto
    }
  }
  
  


  item: Producto = {
    createdAt: new Date(),
    nombre: '',
    avatar:'',
    descripcion:'',
    precioCompra:'',
    precioVenta:'',
    id:'',

  }


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
              private productoService: ProductoService,
              private router: Router){

  }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.facturaService.getFacturaId(id) )
    ).subscribe ( factura => this.factura = factura);

    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes; // Guarda la lista de clientes en una propiedad
    });

    this.productoService.getProductos().subscribe(items => {
      this.items = items;
    })
    
  }

  updateCreate(){

  }




}


