import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../interfaces/factura.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private url: string = 'https://651b6422194f77f2a5ae752c.mockapi.io/api/v1/factura'

  constructor(private http: HttpClient) { }


  getFacturas():Observable<Factura[]>{
    return this.http.get<Factura[]>(`${this.url}`)
  }

  getFacturaId(id: string):Observable<Factura>{
    return this.http.get<Factura>(`${this.url}/${id}`);
  }

  deleteFactura(id: string): Observable<Factura>{
    return this.http.delete<Factura>(`${this.url}/${id}`);
  }

  updateFactura(factura: Factura): Observable<Factura>{
    return this.http.put<Factura>(`${this.url}`, factura);
  }

  createFactura(factura: Factura): Observable<Factura>{
    return this.http.post<Factura>(`${this.url}`, factura);
  }

}
