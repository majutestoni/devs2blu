import { Component, OnInit } from '@angular/core';
@Component({
  // fórmula app - nomeComponente
  // seletor = app-header
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public bntInicio: string = 'Inicio'
  public bntCadastras: string = 'Cadastrar produto'

  constructor() { }

  ngOnInit(): void {
  }

}
