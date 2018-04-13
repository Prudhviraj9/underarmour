import { Component, OnInit } from '@angular/core';
import { HeaderBar } from './header-bar.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { ShopNow } from './../shop-now/shop-now.model';
import { ProductButton } from './../product-button/product-button.model';
import { ProductCards } from './../product-cards/product-cards.model'
import { RESTService } from './../services/ua-http.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  providers: [RESTService]
})
export class HeaderBarComponent implements OnInit {

  headerBar: Observable<HeaderBar>;
  
  constructor(private store: Store<AppState>, private restservice: RESTService) {
    this.headerBar = this.store.select(state => state.headerbar);
  }

  callType(value) {
    let shopNow:ShopNow[];
    let productButton:ProductButton[];
    let productCards:ProductCards[];
    let that = this;

    //update shopnow component
    this.restservice.getShopNowData(value).subscribe(function(res: Array<ShopNow>){
      shopNow = res;
      that.store.dispatch({
        type: 'CLEAR_SHOP_NOW'
      });
      for(let shopNowItem of shopNow) {
        that.store.dispatch({
          type: 'SHOP_NOW',
          payload: <ShopNow> {
            img: shopNowItem.img,
            buttonText: shopNowItem.buttonText,
            isFullWidth: shopNowItem.isFullWidth,
            header: shopNowItem.header,
            description: shopNowItem.description
          }
        });
      }
    });

    //update product button component
    this.restservice.getProductButton(value).subscribe(function(res: Array<ProductButton>) {
      productButton = res;
      that.store.dispatch({
        type: 'CLEAR_PRODUCT_BUTTON'
      });
      for(let productButtonItem of productButton) {
        that.store.dispatch({
          type: 'PRODUCT_BUTTON',
          payload: <ProductButton> {
            buttonText: productButtonItem.buttonText
          }
        });
      }
    });

    //update product cards component
    this.restservice.getProductCardsData(value).subscribe(function(res: Array<ProductCards>){
      productCards = res;
      that.store.dispatch({
        type: 'CLEAR_PRODUCT_CARDS'
      });
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

  ngOnInit() {
    
    let headerBar:HeaderBar[] = [
      {
        countryName: "America"
      }, {
        countryName: "India"
      }
    ]
    for(let country of headerBar) {
      this.store.dispatch({
        type: 'HEADER_BAR',
        payload: <HeaderBar> {
          countryName: country.countryName
        }
      });
    }
    
  }

}

