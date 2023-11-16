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

  subtotalProductos: number = 0;

  calcularSubtotal(producto: Producto): number {
    const cantidad = this.cantidadProductos[producto.id];
    const precio = parseFloat(producto.precioVenta);
    return cantidad * precio;
  }

  //CALCULOS DE TODA LA FACTURA
  //calcular el subtotal de toda la factura
 actualizarSubtotalTotal(){
  for(const producto of this.productosSeleccionados){
    this.subtotalProductos += this.calcularSubtotal(producto);
  }
 }


 // Función para calcular el subtotal
 calcularSubtotalTotal(): number {
  let subtotal = 0;

  // Recorre la lista de productos seleccionados y suma los subtotales de cada uno
  for (const producto of this.productosSeleccionados) {
    subtotal +=  parseFloat(producto.precioVenta) * this.cantidadProductos[producto.id];
  }

  return subtotal;
}

// Función para calcular el IVA (16%)
calcularIva(): number {
  const subtotal = this.calcularSubtotalTotal();
  return subtotal * 0.16; // 16% de IVA
}

// Función para calcular el total (subtotal + IVA)
calcularTotal(): number {
  const subtotal = this.calcularSubtotalTotal();
  const iva = this.calcularIva();
  return subtotal + iva;
}

  

  seleccionarProducto(producto: Producto) {
    // Agregar el producto a la lista de seleccionados
    this.productosSeleccionados.push(producto);
  
    // Establecer la cantidad predeterminada en 1
    this.cantidadProductos[producto.id] = 1;
  }
  


  isProductoSelected(item: Producto): boolean {
    return this.productosSeleccionados.some(selectedItem => selectedItem.id === item.id);
  }

 

  toggleProductoSelection(item: Producto): void {
    if (this.isProductoSelected(item)) {
      this.productosSeleccionados = this.productosSeleccionados.filter(selectedItem => selectedItem.id !== item.id);
      delete this.cantidadProductos[item.id]; // Elimina la cantidad del producto
    } else {
      this.productosSeleccionados.push(item);
      this.cantidadProductos[item.id] = 1; // Establece la cantidad en 1 si se agrega un producto
    }
  }
  
  //conventir los precios del producto a number, porque la api los envia como number
  parseFloat(numero: string): number {
    return parseFloat(numero);
  }

  //eliminar el producto que he agregado en la factura
  eliminarProducto(index: number) {
    this.productosSeleccionados.splice(index, 1); // Elimina el producto de la lista
    // También puedes actualizar otros cálculos, como el subtotal, aquí.
  }

  
  // seleccionarProducto(producto: Producto) {
  //   // Verifica si hay un producto seleccionado
  //   if (this.productoSeleccionado) {
  //     // Agrega el producto a la lista de productos seleccionados
  //     this.productosSeleccionados.push(this.productoSeleccionado);
    
  //     // Establecer la cantidad predeterminada en 1
  //     this.cantidadProductos[this.productoSeleccionado.id] = 1;
  
  //     // Actualiza los cálculos antes de enviar la factura
  //     this.actualizarSubtotalTotal();
  //     this.factura.subtotal = this.calcularSubtotalTotal();
  //     this.factura.iva = this.calcularIva();
  //     this.factura.total = this.calcularTotal();
  
  //     // Restablece el producto seleccionado a null para futuras selecciones
  //     this.productoSeleccionado = null;
  //   } else {
  //     console.error('Error: No se ha seleccionado ningún producto');
  //   }
  // }
  

  



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

  // updateCreate(){
  //   if (this.factura && this.factura.id){
  //     //La factura tiene un ID, entonces es una edición (update)
  //     this.facturaService.updateFactura(this.factura).subscribe(
  //       resp => {
  //         console.log('Cliente editado exitosamente', resp);
  //         this.router.navigate(['/factura']);
  //       },
  //       error=> {
  //         console.error('Error al editar cliente', error);
  //       }
  //     );
  //   }else{
  //     //La factura No tiene un ID, entonces es una nueva factura  (create)
  //     this.facturaService.createFactura(this.factura).subscribe(
  //       factura => {
  //         this.router.navigate(['/factura'])
  //       }
  //     )
  //     console.log('factura creada')
  //   }

  // }

  updateCreate() {
    if (this.factura && this.factura.cliente) {
      const clienteSeleccionado = this.clientes.find(c => c.id === this.factura.cliente.id);
  
      if (clienteSeleccionado) {

        // Actualizar los cálculos antes de enviar la factura
      this.actualizarSubtotalTotal();
      this.factura.subtotal = this.calcularSubtotalTotal();
      this.factura.iva = this.calcularIva();
      this.factura.total = this.calcularTotal();

        this.factura.cliente = clienteSeleccionado;
  
        if (this.factura.id) {
          // La factura tiene un ID, entonces es una edición (update)
          this.facturaService.updateFactura(this.factura).subscribe(
            resp => {
              console.log('Factura editada exitosamente', resp);
              this.router.navigate(['/factura']);
            },
            error => {
              console.error('Error al editar factura', error);
            }
          );
        } else {
          // La factura No tiene un ID, entonces es una nueva factura (create)
          this.facturaService.createFactura(this.factura).subscribe(
            factura => {
              this.router.navigate(['/factura']);
            }
          );
          console.log('Factura creada');
        }
      } else {
        console.error('Error: Cliente no encontrado');
      }
    } else {
      console.error('Error: Factura o cliente no válidos');
    }
  }
  

 

}
