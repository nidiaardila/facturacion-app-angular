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

actualizarSubtotalTotal() {
  this.subtotalProductos = 0;  // Inicializar el subtotal
  for (const producto of this.productosSeleccionados) {
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
    // this.cantidadProductos[producto.id] = 1;

      // Establecer la cantidad predeterminada en 1 si no existe en cantidadProductos
  if (!this.cantidadProductos[producto.id]) {
    this.cantidadProductos[producto.id] = 1;
  }
  }
  


  isProductoSelected(item: Producto): boolean {
    return this.productosSeleccionados.some(selectedItem => selectedItem.id === item.id);
  }

 

  toggleProductoSelection(item: Producto): void {
    // Verificar si el producto ya está seleccionado
    const isAlreadySelected = this.productosSeleccionados.some(selectedItem => selectedItem.id === item.id);
  
    if (isAlreadySelected) {
      // Si ya está seleccionado, no hacer nada o mostrar un mensaje al usuario
      console.log('Producto ya seleccionado');
      return;
    }
  
    // Agregar el producto a la lista de seleccionados
    this.productosSeleccionados.push(item);
    // this.cantidadProductos[item.id] = 1; // Establecer la cantidad en 1 si se agrega un producto


     // Establecer la cantidad en 1 si se agrega un producto
  if (!this.cantidadProductos[item.id]) {
    this.cantidadProductos[item.id] = 1;
  }
  }
  
  
  
  //conventir los precios del producto a number, porque la api los envia como number
  parseFloat(numero: string): number {
    return parseFloat(numero);
  }

 
  eliminarProducto(index: number) {
    const productoEliminado = this.productosSeleccionados.splice(index, 1)[0]; // Elimina el producto de la lista
  
    // Resta el subtotal del producto eliminado del subtotal total
    this.subtotalProductos -= this.calcularSubtotal(productoEliminado);
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
    // this.activateRoute.params.pipe(
    //   switchMap(({ id }) => this.facturaService.getFacturaId(id) )
    // ).subscribe ( factura => this.factura = factura);

    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.facturaService.getFacturaId(id))
    ).subscribe(factura => {
      this.factura = factura;

      // Recuperar productos relacionados con la factura
      if (this.factura && this.factura.items) {
        this.productosSeleccionados = this.factura.items;
        this.productosSeleccionados.forEach(producto => {
          this.cantidadProductos[producto.id] = 1;
        });
      }
    });

    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes; // Guarda la lista de clientes en una propiedad
    });

    this.productoService.getProductos().subscribe(items => {
      this.items = items;
    })
    
  }



  updateCreate() {

    console.log(this.factura.id)

    if (this.factura && this.factura.cliente) {
      const clienteSeleccionado = this.clientes.find(c => c.id === this.factura.cliente.id);
  
      if (clienteSeleccionado) {

        // Actualizar los cálculos antes de enviar la factura
      this.actualizarSubtotalTotal();
      this.factura.subtotal = this.calcularSubtotalTotal();
      this.factura.iva = this.calcularIva();
      this.factura.total = this.calcularTotal();

        this.factura.cliente = clienteSeleccionado;

    // Convertir productosSeleccionados a un array de productos
       this.factura.items = this.productosSeleccionados.map(producto => ({
          id: producto.id,
          nombre: producto.nombre,
          createdAt: producto.createdAt,
          avatar: producto.avatar,
          descripcion: producto.descripcion,
          precioCompra: producto.precioCompra,
          precioVenta: producto.precioVenta,
        }));

        if (this.factura.id && this.factura.id) {
          
          console.log(this.factura);
          console.log('factura arriba es la anterior')
          
          // La factura tiene un ID, entonces es una edición (update)
          this.router.navigate(['/factura']);
          this.facturaService.updateFactura(this.factura).subscribe(
            resp => {
              console.log('Factura editada exitosamente', resp);
              this.router.navigate(['/factura']);
            },
            error => {
              console.error('Error al editar factura', error);
              // Imprime el cuerpo de la respuesta para obtener más detalles
              console.log('Detalles del error:', error);
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
