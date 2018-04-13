import { Component, OnInit } from '@angular/core';
import { ProductButton } from './product-button.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { RESTService } from './../services/ua-http.service';

@Component({
  selector: 'app-product-button',
  templateUrl: './product-button.component.html',
  styleUrls: ['./product-button.component.css']
})
export class ProductButtonComponent implements OnInit {
  productButton: Observable<ProductButton>;
  constructor(private store: Store<AppState>, private restservice: RESTService) {
    this.productButton = this.store.select(state => state.productbutton);
   }

   ngOnInit() {
    let productButton:ProductButton[];

      productButton = [
        {
          buttonText: "WOMEN",
          link: "google.com"
        }, {
          buttonText: "MEN",
          link: "google.com"
        }, {
          buttonText: "GIRLS",
          link: "google.com"
        }, {
          buttonText: "BOYS",
          link: "google.com"
        },
      ];
      for(let productButtonItem of productButton) {
        this.store.dispatch({
          type: 'PRODUCT_BUTTON',
          payload: <ProductButton> {
            buttonText: productButtonItem.buttonText,
            link: productButtonItem.link
          }
        });
      }
  }
}