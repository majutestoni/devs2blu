import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss'],
})
export class CadastrarProdutoComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  // Executar ao clicar no botão de salvar
  public salvarProduto() {
    const jsonPronto = this.formGroup.value;
    console.log(jsonPronto);
    this.produtoService.create(jsonPronto).subscribe((e) => console.log(e));
  }

  private createForm() {
    this.formGroup = this.fb.group({
      code: '',
      name: '',
      costPrice: '',
      salePrice: '',
      preparationTime: '',
      productType: '',
      description: '',
    });
  }
}
