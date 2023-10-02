import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CadastrarProdutoComponent } from './componentes/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./componentes/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'novo',
    loadChildren: () =>
      import('./componentes/cadastrar-produto/cadastrar-produto.module').then(
        (m) => m.CadastrarProdutoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
