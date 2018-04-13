import { Component, OnInit, Input } from '@angular/core';
import { ShopNow } from './shop-now.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RESTService } from './../services/ua-http.service';
import { EventsService } from './../services/ua-events.service';

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css'],
  providers: [EventsService]
})
export class ShopNowComponent implements OnInit {

  shopNow: Observable<ShopNow>;
  
  constructor(private store: Store<AppState>, private restservice: RESTService, private eventsService: EventsService) {
    this.shopNow = this.store.select(state => state.shopnow);
    eventsService.countryChanged$.subscribe(
      country => {
        debugger;
      });
    
  }

  ngOnInit() {
    this.eventsService.changeCountry("value");
    let shopNow:ShopNow[];
    let that = this;
    this.restservice.getShopNowData().subscribe(function(res: Array<ShopNow>){
      shopNow = res;
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
   
    
  }
}
