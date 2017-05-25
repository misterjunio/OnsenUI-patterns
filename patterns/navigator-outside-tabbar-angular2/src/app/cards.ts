import { Component } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { PageNav2Component } from './page-nav-2'

@Component({
  selector: 'ons-page',
  template: require('./cards.html')
})
export class CardsComponent {
  constructor(private _navigator: OnsNavigator) { }

  push(event) {
    this._navigator.element.pushPage(PageNav2Component, { data: { cardTitle: event.target.textContent } });
  }
}
