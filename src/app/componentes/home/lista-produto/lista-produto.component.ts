import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/@core/product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss'],
})
export class ListaProdutoComponent implements OnInit {
  @Input() produto: ProductModel;
  @Input() nome: string;
  @Input() descricao: string;
  @Input() valor: number;
  @Output() excluido = new EventEmitter

  constructor(
    public dialog: MatDialog,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {}
  public openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { produto: this.produto },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log();
    });
  }

  public deletarProduto() {
    this.produtoService.deleteProduct(this.produto.id).subscribe((e) => {
      this.excluido.emit(true)
    });
  }
}
