import { Cliente } from "../../cliente/interfaces/cliente.interface";
import { Producto } from "src/app/producto/interfaces/producto.interface";

export interface Factura {
    createdAt: Date;
    folio:     string;
    empresa:   string;
    rut:       string;
    cliente:   Cliente;
    items:     Producto[];
    subtotal:  number;
    iva:       number;
    total:     number;
    id:        string;
}

