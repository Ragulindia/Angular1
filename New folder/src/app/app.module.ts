import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Companant1Component } from './component1/companant1.component';
import { Component2Component } from './component2/component2.component';


@NgModule({
  declarations: [
    AppComponent,
    Companant1Component,
    Component2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ Companant1Component],
  
 
})
export class AppModule { }
