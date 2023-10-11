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

  eliminar(id: string): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  

}
