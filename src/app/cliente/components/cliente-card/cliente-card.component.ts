import { Component, Input } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';


@Component({
  selector: 'app-cliente-card',
  templateUrl: './cliente-card.component.html',
  styleUrls: ['./cliente-card.component.scss']
})
export class ClienteCardComponent {

  @Input() cliente!: Cliente;


}
