import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Clientes',
            icon: 'pi pi-fw pi-users',
        },
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-credit-card',
        },
        {
            label: 'Facturas',
            icon: 'pi pi-fw pi-server',
        },
        {
            separator: true
        },
        {
            label: 'Salir',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
}
}


