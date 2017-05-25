import { Component } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { PageNav1Component } from './page-nav-1'

@Component({
  selector: 'ons-page',
  template: require('./home.html')
})
export class HomeComponent {
  constructor(private _navigator: OnsNavigator) { }

  push() {
    this._navigator.element.pushPage(PageNav1Component);
  }
}
