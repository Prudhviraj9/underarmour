import { Component, OnInit, Input } from '@angular/core';
import { ShopNow } from './shop-now.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RESTService } from './../services/ua-http.service';
import { ResultsObject } from './../app.model'

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit {

  shopNow: Observable<ShopNow>;
  
  constructor(private store: Store<AppState>, private restservice: RESTService) {
    this.shopNow = this.store.select(state => state.shopnow);
  }

  ngOnInit() {
    let shopNow:ShopNow[];
    let that = this;
    this.restservice.getShopNowData('').subscribe(function(res: ResultsObject){
      shopNow = res.results;
      debugger;
      for(let shopNowItem of shopNow) {
        that.store.dispatch({
          type: 'SHOP_NOW',
          payload: <ShopNow> {
            img: shopNowItem.img,
            buttonText: shopNowItem.buttonText,
            isFullWidth: shopNowItem.isFullWidth,
            header: shopNowItem.header,
            description: shopNowItem.description,
            link: shopNowItem.link
          }
        });
      }
    });
  }
}
