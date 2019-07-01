import { element } from 'protractor';
import { HelloWorldComponent } from './component/HelloWorld/HelloWorld.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    // AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: [],

  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, { injector });
    customElements.define('app-hello-world', custom);
  }
  ngDoBootstrap() {}
}
