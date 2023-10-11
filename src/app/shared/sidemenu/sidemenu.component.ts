import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  items: MenuItem[] | undefined;

//   ngOnInit() {
//     this.items = [
//         {
//             label: 'Clientes',
//             icon: 'pi pi-fw pi-users',
//         },
//         {
//             label: 'Productos',
//             icon: 'pi pi-fw pi-credit-card',
//         },
//         {
//             label: 'Facturas',
//             icon: 'pi pi-fw pi-server',
//         },
//         {
//             separator: true
//         },
//         {
//             label: 'Salir',
//             icon: 'pi pi-fw pi-power-off'
//         }
//     ];
// }

menuModel: any[];

constructor() {
  this.menuModel = [
    
    {
      label: 'Clientes',
      items: [
        { label: 'Nuevo', icon: 'pi pi-plus', routerLink: '/clientes/nuevo' },
        { label: 'Consultar', icon: 'pi pi-search', routerLink: '/clientes/consultar' },
      ]
    },
    {
        label: 'Productos',
        items: [
          { label: 'Nuevo', icon: 'pi pi-plus', routerLink: '/productos/nuevo' },
          { label: 'Consultar', icon: 'pi pi-search', routerLink: '/productos/consultar' },
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
        // Lógica para cerrar sesión
        console.log('Logout clicked');
      }
    }
  ];
}
}


