import { Injectable } from '@angular/core';
import { UrlBack } from '../urlEnum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../Product.model';

@Injectable({
  providedIn: 'root'
})
// faz referencia a ProductControler
export class ProdutoService {
  // /api/products - pego do value do controller 
  private urlBase = UrlBack.BASE_TEST + '/api/products' 

  // 
  constructor(private http: HttpClient) { }


  // PRIMEIRO CONSUMO DE ENDPOIN
  // Observable - é a ideia de termos uma promessa
  // Observable<tipo do retorno>
  public listAll(): Observable<ProductModel[]>{
    // ProductModel[] - lista de produtos
    return this.http.get<ProductModel[]>(this.urlBase)
  }

}
