import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandingComponent } from './branding/branding.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    BrandingComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrandingComponent,
    NavComponent
  ]
})
export class HeaderModule { }


