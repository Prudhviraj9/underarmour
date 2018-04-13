import { Component, OnInit } from '@angular/core';
import { MegaMenuModel } from './mega-menu.model';
import { MenuItemModel } from './menu-items.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { RESTService } from './../services/ua-http.service';
import { NavObject } from './../app.model'

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent implements OnInit {
  megaMenu: Observable<MegaMenuModel[]>;
  
  constructor(private store: Store<AppState>, private restservice: RESTService) {
    this.megaMenu = this.store.select(state => state.megamenu);
  }
  
  ngOnInit() {
    let megaMenu:MegaMenuModel[];
    let that = this;
    this.restservice.getMegaMenu('').subscribe(function(res: NavObject){
      megaMenu = res.nav;
      for(let megaMenuItem of megaMenu) {
        that.store.dispatch({
          type: 'MEGA_MENU',
          payload: <MegaMenuModel> megaMenuItem
        });
      }
    });
    
  }
}
