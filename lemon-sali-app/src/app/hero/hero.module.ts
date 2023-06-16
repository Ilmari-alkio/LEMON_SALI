import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    TitleComponent,
    ImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    ImageComponent,
  ]
})
export class HeroModule { }
