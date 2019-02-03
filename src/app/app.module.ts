import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatCheckboxModule } from '@angular/material';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurProductComponent } from './pages//our-product/our-product.component';
import { GivingBackComponent } from './pages//giving-back/giving-back.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChangeClassDirective } from './directives/change-class.directive';
import { ProductsComponent } from './pages/products/products.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutUsComponent,
    OurProductComponent,
    GivingBackComponent,
    NavbarComponent,
    ChangeClassDirective,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
