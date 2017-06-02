import { Component, Injector } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { MyApp } from './app'

@Component({
  selector: 'ons-page[settings]',
  template: require('./settings.html')
})
export class SettingsComponent {
  constructor(private inj: Injector) { }

  openMenu() {
    this.inj.get(MyApp).menu.nativeElement.open();
  }
}
