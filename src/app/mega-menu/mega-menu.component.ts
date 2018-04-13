import { Component, OnInit } from '@angular/core';
import { MegaMenuModel } from './mega-menu.model';
import { MenuItemModel } from './menu-items.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent implements OnInit {
  megaMenu: Observable<MegaMenuModel[]>;
  
  constructor(private store: Store<AppState>) {
    this.megaMenu = this.store.select(state => state.megamenu);
  }
  
  ngOnInit() {
    let menuItem:MenuItemModel[] = [{
      menuTitle: "MEN",
      subMenu: ["UA HOVR", "MK1 Training Essentials", "Shadow Pants", "New Project Rock Gear"]
    },{
      menuTitle: "WOMEN",
      subMenu: ["UA HOVR", "MK1 Training Essentials", "Shadow Pants", "New Project Rock Gear"]
    },{
      menuTitle: "BOYS",
      subMenu: ["UA HOVR", "MK1 Training Essentials", "Shadow Pants", "New Project Rock Gear"]
    },{
      menuTitle: "GIRLS",
      subMenu: ["UA HOVR", "MK1 Training Essentials", "Shadow Pants", "New Project Rock Gear"]
    }];
    let megaMenu:MegaMenuModel[] = [{
      menuTitle: "New Arrivals",
      subMenu: menuItem
    },
    {
      menuTitle: "Men",
      subMenu: menuItem
    },
    {
      menuTitle: "Women",
      subMenu: menuItem
    },
    {
      menuTitle: "Boys",
      subMenu: menuItem
    },
    {
      menuTitle: "Girls",
      subMenu: menuItem
    },
    {
      menuTitle: "Shoes",
      subMenu: menuItem
    },
    {
      menuTitle: "Technology",
      subMenu: menuItem
    },
    {
      menuTitle: "Outlet",
      subMenu: menuItem
    }]
    for(let megaMenuItem of megaMenu) {
      this.store.dispatch({
        type: 'MEGA_MENU',
        payload: <MegaMenuModel> megaMenuItem
      });
    }
  }
}
