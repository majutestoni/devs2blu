import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MaterialExportModule } from 'src/app/componentes/shared/material.module';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialExportModule
  ]
})
export class ModalModule { }
