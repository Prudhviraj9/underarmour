import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsService {

  // Observable string sources
  private countryChanged = new BehaviorSubject<string>('');

  // Observable string streams
  countryChanged$ = this.countryChanged.asObservable();

  // Service message commands
  changeCountry(country: string) {
      debugger;
    this.countryChanged.next(country);
  }
}