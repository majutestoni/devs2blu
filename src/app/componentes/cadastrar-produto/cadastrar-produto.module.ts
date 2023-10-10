import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarProdutoRoutingModule } from './cadastrar-produto-routing.module';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';
import { MaterialExportModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from 'src/app/@core/services/services.module';


@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarProdutoRoutingModule,
    MaterialExportModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule
  ]
})
export class CadastrarProdutoModule { }
