import { Component } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { Tabbar } from './tabbar'

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class MyApp {
  tabbar = Tabbar
}
