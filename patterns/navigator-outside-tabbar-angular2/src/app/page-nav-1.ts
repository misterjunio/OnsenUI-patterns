import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  template: require('./page-nav-1.html')
})
export class PageNav1Component implements OnInit {
  constructor(private _navigator: OnsNavigator, private _params: Params) { }

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
}
