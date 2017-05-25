import { Component } from '@angular/core';
import { OnsNavigator, Params } from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  template: require('./page-nav-2.html')
})
export class PageNav2Component {
  constructor(private _params: Params) { }

  cardTitle: string = 'Custom Card';

  ngOnInit() { 
    if (this._params.data && this._params.data.cardTitle)
      this.cardTitle = this._params.data.cardTitle;
  }
}
