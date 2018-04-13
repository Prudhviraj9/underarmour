import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';

import { megaMenuReducer } from './reducers/mega-menu.reducer';
import { shopNowReducer } from './reducers/shop-now.reducer';
import { productButtonReducer } from './reducers/product-button.reducer';
import { headerBannerReducer } from './reducers/header-banner.reducer';
import { productCardsReducer } from './reducers/product-cards.reducer';
import { headerBarReducer } from './reducers/header-bar.reducer';

import { HeaderDescriptionComponent } from './header-description/header-description.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { ProductButtonComponent } from './product-button/product-button.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

import { RESTService } from './services/ua-http.service';


@NgModule({
  declarations: [
    AppComponent,
    MegaMenuComponent,
    HeaderDescriptionComponent,
    ShopNowComponent,
    ProductButtonComponent,
    HeaderBannerComponent,
    ProductCardsComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      megamenu: megaMenuReducer,
      shopnow: shopNowReducer,
      productbutton: productButtonReducer,
      headerbanner: headerBannerReducer,
      productcards: productCardsReducer,
      headerbar: headerBarReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 60})
  ],
  providers: [RESTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
