import { Component } from '@angular/core';

import { AppTabbar } from './app-tabbar'

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class MyApp {
  appTabbar = AppTabbar
}
