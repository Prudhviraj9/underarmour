import { Component, OnInit } from '@angular/core';
import { HeaderBanner } from './header-banner.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { RESTService } from './../services/ua-http.service';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {

  headerBanner: Observable<HeaderBanner>;
  
  constructor(private store: Store<AppState>, private restservice: RESTService) {
    this.headerBanner = this.store.select(state => state.headerbanner);
   }

  ngOnInit() {
    let headerBanner:HeaderBanner[];
    let that = this;
    this.restservice.getHeaderBanner('').subscribe(function(res: Array<HeaderBanner>){
      headerBanner = res;
      for(let headerBannerItem of headerBanner) {
        that.store.dispatch({
          type: 'HEADER_BANNER',
          payload: <HeaderBanner> headerBannerItem
        });
      }
    })
    
  }

}
