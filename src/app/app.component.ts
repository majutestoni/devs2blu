import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'novo';
  private nome: string;
  // Caso o atributo for privado
  // o HTML não consegue acessar

  // atributo public = HTML consegue acessar
  public titulo: string = 'Olá pessoas';

  // É uma função especifica do Angular
  // ela carrrega por primeiro ao carregar a tela
  ngOnInit(): void {
    // sysout versão javaScript
    console.log('Hello world');
  }
  /*
: Cálculo de Média 
Crie um método chamado calculadora onde é passado 3 parametros e ao fim imprima a média 
Dificultando: passe como vetor */
  // public ou private
  private calculoMedia(numUm: number, numDois: number, numTres: number): void {
    // pq const? a variavel média não será alterada
    const media: number = (numUm + numDois + numTres) / 3;
  }

  /*
Manipulação de Strings 

Crie um método chamado verificaString onde é passado uma string, verifique quantos caracteres possui, e verifique se é igual a “devs2blu” */

  /*
Cálculo de Juros 

Crie um método chamado calculaJuros que aceite três parâmetros: o valor principal (capital), a taxa de juros (em porcentagem) e o número de meses. O método deve calcular e imprimir o montante total após os juros compostos */
}
