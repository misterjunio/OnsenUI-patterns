// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'angular2-onsenui';

import { MyApp } from './app/app';
import { HomeComponent } from './app/home';
import { PageNav1Component } from './app/page-nav-1';
import { CardsComponent } from './app/cards';
import { PageNav2Component } from './app/page-nav-2';
import { SettingsComponent } from './app/settings';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpModule,
    ],
    declarations: [
        MyApp,
        HomeComponent,
        PageNav1Component,
        CardsComponent,
        PageNav2Component,
        SettingsComponent
    ],
    entryComponents: [
        HomeComponent,
        PageNav1Component,
        CardsComponent,
        PageNav2Component,
        SettingsComponent
    ],
    bootstrap: [
        MyApp,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
