import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/@core/services/produto.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listAll().subscribe((produtos) => console.log(produtos));
  }
}
