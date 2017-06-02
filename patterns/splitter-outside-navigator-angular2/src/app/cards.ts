import { Component, Injector } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { MyApp } from './app'
import { PageNav2Component } from './page-nav-2'

@Component({
  selector: 'ons-page[cards]',
  template: require('./cards.html')
})
export class CardsComponent {
  constructor(private _navigator: OnsNavigator, private inj: Injector) { }

  push(event) {
    this._navigator.element.pushPage(PageNav2Component, { data: { cardTitle: event.target.textContent } });
  }

  openMenu() {
    this.inj.get(MyApp).menu.nativeElement.open();
  }
}
