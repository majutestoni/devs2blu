import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {

  public formGroup: FormGroup
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.createForm()
  }

  private createForm(){
    this.formGroup = this.fb.group ({
      code: '',
      name: '',
      costPrice: '',
      salePrice: '',
      preparationTime: '',
      productTipe: '',
      description: '',

    })
  }
}
