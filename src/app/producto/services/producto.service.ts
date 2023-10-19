import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = 'https://651b56c6194f77f2a5ae6e09.mockapi.io/api/cliente/v1/producto'

  constructor(private http: HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}`);
  }

  getProductoId(id: string): Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/${id}`)
  }

  deleteProducto(id: string):Observable<Producto>{
    return this.http.delete<Producto>(`${this.url}/${id}`);
  }

  updateProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.url}/${producto.id}`, producto);
  }

  createProducto(){
    
  }
}
