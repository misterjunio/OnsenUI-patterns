import { Component, OnInit, Injector } from '@angular/core';
import { OnsNavigator, Params } from 'angular2-onsenui';

import { MyApp } from './app'

@Component({
  selector: 'ons-page[page-nav-1]',
  template: require('./page-nav-1.html')
})
export class PageNav1Component implements OnInit {
  constructor(private _navigator: OnsNavigator, private _params: Params, private inj: Injector) { }

  title: string = 'Custom Page';

  ngOnInit() { 
    if (this._params.data && this._params.data.title)
      this.title = this._params.data.title;
  }

  push() {
    this._navigator.element.pushPage(PageNav1Component, { data: { title: this._navigator.element.topPage.querySelector('ons-input').value } });
  }

  pop() {
    this._navigator.element.popPage();
  }

  openMenu() {
    this.inj.get(MyApp).menu.nativeElement.open();
  }
}
