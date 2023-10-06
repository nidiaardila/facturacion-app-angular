import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
;






@NgModule({
  declarations: [],
  imports: [
    // ButtonModule,
    // SlideMenuModule
  ],

  exports:[
    ButtonModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DividerModule,
    CardModule,
    InputTextModule,
    PasswordModule

  ]
})
export class PrimeNgModule { }
