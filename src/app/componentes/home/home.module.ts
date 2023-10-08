import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialExportModule } from '../shared/material.module';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ServicesModule } from 'src/app/@core/services/services.module';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ListaProdutoComponent, ModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialExportModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
