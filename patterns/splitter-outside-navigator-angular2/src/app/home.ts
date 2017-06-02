import { Component, Injector } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { MyApp } from './app'
import { PageNav1Component } from './page-nav-1'

@Component({
  selector: 'ons-page[home]',
  template: require('./home.html')
})
export class HomeComponent {
  constructor(private _navigator: OnsNavigator, private inj: Injector) { }

  push() {
    this._navigator.element.pushPage(PageNav1Component);
  }

  openMenu() {
    this.inj.get(MyApp).menu.nativeElement.open();
  }
}
