import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurProductComponent } from './our-product/our-product.component';
import { GivingBackComponent } from './giving-back/giving-back.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutUsComponent,
    OurProductComponent,
    GivingBackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
