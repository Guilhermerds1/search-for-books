import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RodapeComponent
  ]
})
export class SharedModule { }
