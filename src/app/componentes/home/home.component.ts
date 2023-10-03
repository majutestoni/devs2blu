import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Criando um vetor(objeto) - funciona igual ArrayList
  public listaDeTarefas: string[] = ['Cozinhar', 'ler', 'estudar']


  constructor() { }

  ngOnInit(): void {
  }

}
