import { Component, OnInit, Injector } from '@angular/core';
import { OnsNavigator, Params } from 'angular2-onsenui';

import { MyApp } from './app'

@Component({
  selector: 'ons-page[page-nav-2]',
  template: require('./page-nav-2.html')
})
export class PageNav2Component implements OnInit {
  constructor(private _params: Params, private inj: Injector) { }

  cardTitle: string = 'Custom Card';

  ngOnInit() { 
    if (this._params.data && this._params.data.cardTitle)
      this.cardTitle = this._params.data.cardTitle;
  }

  openMenu() {
    this.inj.get(MyApp).menu.nativeElement.open();
  }
}
