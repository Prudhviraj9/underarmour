import { Component, OnInit, Input } from '@angular/core';
import { HeaderDescription } from './header-description.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header-description',
  templateUrl: './header-description.component.html',
  styleUrls: ['./header-description.component.css']
})
export class HeaderDescriptionComponent implements OnInit {
  @Input() header: String;
  @Input() description: String;

  constructor() {
  }

  ngOnInit() {
  }

}
