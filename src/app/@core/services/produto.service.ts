import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../urls';
import { Observable } from 'rxjs';
import { ProductModel } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private urlBase = `${Urls.BACK_LOCAL}/api/products`;

  constructor(private http: HttpClient) {}

  public listAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.urlBase}`);
  }
}
