import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/@core/product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public produtos: ProductModel[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listAll().subscribe((produtos) => this.produtos = produtos);
  }

  itemExcluido(){
    this.produtoService.listAll().subscribe((produtos) => this.produtos = produtos);

    alert('Produto deletado!')
  }
}
