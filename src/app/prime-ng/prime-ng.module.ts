import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';

import { SidebarModule } from 'primeng/sidebar';


import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownItem, DropdownModule } from 'primeng/dropdown';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

import { MenubarModule } from 'primeng/menubar';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';






@NgModule({
  declarations: [],
  imports: [

  ],

  exports:[
    ButtonModule,
    SlideMenuModule,
    // BrowserAnimationsModule,
    ToolbarModule,
    DividerModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    TableModule,
    SidebarModule,
    DropdownModule,
    MenubarModule,
    ProgressSpinnerModule,

    ToastModule,
    ConfirmDialogModule,
    ButtonModule
    
   

  ],
  
})
export class PrimeNgModule { }
