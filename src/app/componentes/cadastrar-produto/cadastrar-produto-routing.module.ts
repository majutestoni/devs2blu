import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';

const routes: Routes = [
  {path:'', component: CadastrarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarProdutoRoutingModule { }
