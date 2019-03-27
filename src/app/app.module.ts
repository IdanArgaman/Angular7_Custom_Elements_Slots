import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  /*
      Defines a schema that allows an NgModule to contain the following:

      (1) Non-Angular elements named with dash case (-).
      (2) Element properties named with dash case (-). Dash case is the
          naming convention for custom elements.
  */
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {

}
