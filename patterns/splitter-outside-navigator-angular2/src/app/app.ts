import { Component, ViewChild } from '@angular/core';
import { OnsSplitterSide, OnsNavigator } from 'angular2-onsenui';

import { HomeComponent } from './home'
import { CardsComponent } from './cards'
import { SettingsComponent } from './settings'

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class MyApp {
  @ViewChild('menu') private menu: OnsSplitterSide;
  @ViewChild('navi') private navi: OnsNavigator;

  home = HomeComponent;
  cards = CardsComponent;
  settings = SettingsComponent;

  loadPage(page) {
    this.menu.nativeElement.close();
    this.navi.nativeElement.resetToPage(page, { animation: 'fade' });
  }

  openMenu() {
    this.menu.nativeElement.open();
  }
}
