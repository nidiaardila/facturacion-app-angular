import { Component } from '@angular/core';
import { Factura } from '../../interfaces/factura.interface';
import { FacturaService } from '../../services/factura.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  facturas: any[] = [];

  constructor(private facturaService: FacturaService,
              private router: Router){

              }
  
  ngOnInit():void{
    this.getListadoFacturas()
  }

  getListadoFacturas(){
    this.facturaService.getFacturas()
    .subscribe(facturas => this.facturas = facturas)
  }
  


              

}
