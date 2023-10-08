import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss'],
})
export class CadastrarProdutoComponent implements OnInit {
  public opcoesProdusto = ['SNACK', 'DRINK', 'DESSERT'];

  public formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService
  ) {}
  ngOnInit(): void {
    this.createForm();
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

  public salvar() {
    console.log(this.formGroup.value);
    this.produtoService.createProduct(this.formGroup.value).subscribe((p) => {
      alert('Produto criado!');
      this.formGroup.reset();
    });
  }
}
