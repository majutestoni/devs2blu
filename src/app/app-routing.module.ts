import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CadastrarProdutoComponent } from './componentes/cadastrar-produto/cadastrar-produto.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  // criar uma rota - objeto de rota
  // 1 - Zerar rotas
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // 2 - Criar a rota de home
  // defino rota e defino o componente
  { path: 'home', component: HomeComponent },

  {
    path: 'novo',
    loadChildren: () =>
      import('./componentes/cadastrar-produto/cadastrar-produto.module').then(
        (m) => m.CadastrarProdutoModule
      ),
  },
];

// principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
