import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    SidemenuComponent,
    ToolbarComponent
  ]

})
export class SharedModule { }
