import { Cliente } from "../../cliente/interfaces/cliente.interface";

export interface Factura {
    createdAt: Date;
    folio:     string;
    empresa:   string;
    rut:       string;
    cliente:   Cliente;
    items:     Item[];
    subtotal:  number;
    iva:       number;
    total:     number;
    id:        string;
}

// export interface Cliente {
//     fechaCreacion?: Date;
//     nombre?:        string;
//     avatar?:        string;
//     direccion?:     string;
//     Telefono?:      string;
//     email?:         string;
//     id?:            string;
// }

export interface Item {
    createdAt:    Date;
    nombre:       string;
    avatar:       string;
    descripcion:  string;
    precioCompra: string;
    precioVenta:  string;
    id:           string;
}