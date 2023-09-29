import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';


// Modulo importar bibliotecas dentro do modulo
// e essas bibliotecas serão utilizadas pelos 
// componexnentes que foram declarados

// Meu modulo pode ter varios componentes
// mas aqui vamos trabalhar com idea de somente um
@NgModule({
  // Modulo declara componentes ao quais estão no escopo
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  // Exportar o componente para ser visto por outros 
  // componentes - private para publico
  exports: [HeaderComponent]
})
export class HeaderModule { }
