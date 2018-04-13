import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from './header-banner.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {

  headerBanner: Observable<HeaderBanner>;
  
  constructor(private store: Store<AppState>) {
    this.headerBanner = this.store.select(state => state.headerbanner);
   }

  ngOnInit() {
      this.store.dispatch({
        type: 'HEADER_BANNER',
        payload: <HeaderBanner> {
          img:"https://underarmour.scene7.com/is/image/Underarmour/170316_HOVR_PRM_W_104_V2?wid=1600&fmt=jpg",
          buttonText1:"Shop Now",
          buttonText2:"Shop Now",
          header:"Header",
          description:"description"
        }
      });
    
  }

}
