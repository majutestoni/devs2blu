import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './produto.service';


// Ele vair organizar
// ou seja, ele recebe declara todos os nossos services
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // disponibilizar biblioteca para consumir api
    HttpClientModule
  ],
  providers: [ProdutoService]
})
export class ServicesModule { }
