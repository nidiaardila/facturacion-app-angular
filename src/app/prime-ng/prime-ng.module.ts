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
    TableModule

  ]
})
export class PrimeNgModule { }
