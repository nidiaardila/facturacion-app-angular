import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'https://651b56c6194f77f2a5ae6e09.mockapi.io/api/cliente/v1/cliente'


  constructor(private http: HttpClient) { }


  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}`);
  }

  getClienteId(id: string):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/${ id }`)
  }

  deleteCliente(id: string): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}/${id}`);
  }

  updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente);  
  }

  
}
