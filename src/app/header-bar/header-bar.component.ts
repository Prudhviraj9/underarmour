import { Component, OnInit } from '@angular/core';
import { HeaderBar } from './header-bar.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { EventsService }     from './../services/ua-events.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
  providers: [EventsService]
})
export class HeaderBarComponent implements OnInit {

  headerBar: Observable<HeaderBar>;
  
  constructor(private store: Store<AppState>, private eventsService: EventsService) {
    this.headerBar = this.store.select(state => state.headerbar);
  }

  callType(value) {
    this.eventsService.changeCountry(value);
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

