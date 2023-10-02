import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialExportModule } from '../shared/material.module';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

@NgModule({
  declarations: [HomeComponent, ListaProdutoComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialExportModule],
})
export class HomeModule {}