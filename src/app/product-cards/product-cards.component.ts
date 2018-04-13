import { Component, OnInit } from '@angular/core';
import { ProductCards } from './product-cards.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { RESTService } from './../services/ua-http.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  productCards: Observable<ProductCards>;
  
  constructor(private store: Store<AppState>, private restservice: RESTService) {
    this.productCards = this.store.select(state => state.productcards);
   }

  ngOnInit() {
    let productCards:ProductCards[];

    let that = this;
    this.restservice.getProductCardsData().subscribe(function(res: Array<ProductCards>){
      productCards = res;
      for(let product of productCards) {
        that.store.dispatch({
          type: 'PRODUCT_CARDS',
          payload: <ProductCards> {
            img: product.img,
            buttonText: product.buttonText,
            description: product.description
          }
        });
      }
    });
  }
}