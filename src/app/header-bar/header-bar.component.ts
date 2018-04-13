import { Component, OnInit } from '@angular/core';
import { HeaderBar } from './header-bar.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { ShopNow } from './../shop-now/shop-now.model';
import { ProductButton } from './../product-button/product-button.model';
import { ProductCards } from './../product-cards/product-cards.model'
import { RESTService } from './../services/ua-http.service';
import { HeaderBanner } from './../header-banner/header-banner.model';
import { ResultsObject, NavObject } from './../app.model';
import { MegaMenuModel } from './../mega-menu/mega-menu.model';

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
    let productCards:ProductCards[];
    let headerBanner:HeaderBanner[];
    let megaMenu:MegaMenuModel[];
    let that = this;

    //update shopnow component
    this.restservice.getShopNowData(value).subscribe(function(res: ResultsObject){
      shopNow = res.results;
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

    //update shopnow component
    this.restservice.getHeaderBanner(value).subscribe(function(res: ResultsObject){
      headerBanner = res.results;
      that.store.dispatch({
        type: 'CLEAR_HEADER_BANNER'
      });
      for(let headerBannerItem of headerBanner) {
        that.store.dispatch({
          type: 'HEADER_BANNER',
          payload: <HeaderBanner> headerBannerItem
        });
      }
    })

    //update product cards component
    this.restservice.getProductCardsData(value).subscribe(function(res: ResultsObject){
      productCards = res.results;
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

    //Update Mega Menu
    this.restservice.getMegaMenu('').subscribe(function(res: NavObject){
      megaMenu = res.nav;
      that.store.dispatch({
        type: 'CLEAR_MEGA_MENU'
      });
      for(let megaMenuItem of megaMenu) {
        that.store.dispatch({
          type: 'MEGA_MENU',
          payload: <MegaMenuModel> megaMenuItem
        });
      }
    });
  }

  ngOnInit() {
    
    let headerBar:HeaderBar[] = [
      {
        countryName: "America"
      }, {
        countryName: "French"
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

