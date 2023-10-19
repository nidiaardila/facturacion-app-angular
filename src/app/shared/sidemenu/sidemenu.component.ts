import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  items: MenuItem[] | undefined;


menuModel: any[];

constructor(private router: Router) {
  this.menuModel = [
    
    {
      label: 'Clientes',
      items: [
        { label: 'Nuevo', icon: 'pi pi-plus', routerLink: '/cliente/cliente' },
        { label: 'Consultar', icon: 'pi pi-search', routerLink: '/cliente/listado' },
      ]
    },
    {
        label: 'Productos',
        items: [
          { label: 'Nuevo', icon: 'pi pi-plus', routerLink: '/producto/producto' },
          { label: 'Consultar', icon: 'pi pi-search', routerLink: '/producto/listado' },
        ]
      },
    {
      label: 'Facturas',
      items: [
        { label: 'Nuevo', icon: 'pi pi-plus', routerLink: '/facturas/nuevo' },
        { label: 'Consultar', icon: 'pi pi-search', routerLink: '/facturas/consultar' },
      ]
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        this.logout();
        console.log('Logout clicked');
      }
    }
  ];
}

logout() {
  this.router.navigate(['./auth']);
}

}


