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

    // só estou chamando os metodos
    this.calculoMedia(10, 15, 20);
    this.calculoMedia(10, 10, 10);

    this.verificaString('devs2blu');
    this.verificaString('entra21');

    const montante:number = this.calculaJuros(500, 5, 5);
    console.log('Montante: ' + montante)
  }
  /*
: Cálculo de Média 
Crie um método chamado calculadora onde é passado 3 parametros e ao fim imprima a média 
Dificultando: passe como vetor */
  // public ou private
  private calculoMedia(numUm: number, numDois: number, numTres: number): void {
    // pq const? a variavel média não será alterada
    const media: number = (numUm + numDois + numTres) / 3;
    console.log('media' + media);
  }

  /*
Manipulação de Strings 
Crie um método chamado verificaString onde é passado uma string, verifique quantos caracteres possui, e verifique se é igual a “devs2blu” */
  private verificaString(dado: string) {
    const quantosCaracteres: number = dado.length; // pega a quantidade de carac

    console.log('Numero de caracteres: ' + quantosCaracteres);
    // é posivel criar varaivel booleana
    let palavraVerdadeira: boolean = false;
    // dois iguais só valida o dado
    // tres iguais valida o dado e o tipo
    if (dado === 'devs2blu') {
      palavraVerdadeira = true;
      console.log('Palavra igual!!');
    } else {
      console.log('Palavra diferente');
    }
  }

  /*


Cálculo de Juros 

Crie um método chamado calculaJuros que aceite três parâmetros: o valor principal (capital), a taxa de juros (em porcentagem) e o número de meses. O método deve calcular e imprimir o montante total após os juros compostos */
  /*
Qual a fórmula dos juros compostos? A fórmula para calcular os juros compostos é: M = C.(1-i)^n, sendo M o montante, C o capital inicial, i a taxa de juros e n o tempo.*/
  private calculaJuros(
    valorInicial: number,
    taxaDeJuros: number,
    quantidadeDeMeses: number
  ): number {
    taxaDeJuros = taxaDeJuros / 100
    const calc1: number =  (1 + taxaDeJuros) ;
    const montante: number =  valorInicial * Math.pow(calc1, quantidadeDeMeses); 


    return montante;
  }
}
