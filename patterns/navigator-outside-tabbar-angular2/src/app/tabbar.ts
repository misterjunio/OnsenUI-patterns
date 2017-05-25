import { Component } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { HomeComponent } from './home'
import { CardsComponent } from './cards'
import { SettingsComponent } from './settings'

@Component({
  selector: 'ons-page',
  template: require('./tabbar.html')
})
export class Tabbar {
  home = HomeComponent;
  cards = CardsComponent;
  settings = SettingsComponent;
}
