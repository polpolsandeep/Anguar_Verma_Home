import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DemoComponent } from './demo/demo.component';
import { ResidentialComponent } from './residential/residential.component';
import { VideothumbComponent } from './videothumb/videothumb.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { PromiseOtherComponent } from './promise-other/promise-other.component';
import { Demo2Component } from './demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HeaderComponent,
    DemoComponent,
    ResidentialComponent,
    VideothumbComponent,
    ViewmoreComponent,
    PromiseOtherComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
