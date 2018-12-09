import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './courses/courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PannelComponent } from './pannel/pannel.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SortProductsByNamePipe} from './products/pipes/sort-products-by-name.pipe';
import {SortProductsByPricePipe} from './products/pipes/sort-products-by-price.pipe';
import {SearchProductsPipe} from './products/pipes/search-products.pipe';
import {ConvertDatePipe} from './products/pipes/convert-date.pipe';
import {AddSignPipe} from './products/pipes/add-sign.pipe';
import { TestDeclarativeComponent } from './test-declarative/test-declarative.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsThumbnailsComponent } from './products/products-thmblains/products-thumbnails.component';
import {FusejsModule} from 'angular-fusejs';
import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';
import { ProductsToolbarComponent } from './products/products-toolbar/products-toolbar.component';
import { InfoComponent } from './share/info/info.component';
import {ShoppingCartService} from './products/Services/shopping-cart.service';
import {ProductService} from './products/Services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    PannelComponent,
    ProductsComponent,
    ContactFormComponent,
    SignupFormComponent,
    SortProductsByNamePipe,
    SortProductsByPricePipe,
    SearchProductsPipe,
    ConvertDatePipe,
    AddSignPipe,
    TestDeclarativeComponent,
    ProductsListComponent,
    ProductsThumbnailsComponent,
    ShoppingCartComponent,
    ProductsToolbarComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FusejsModule,
  ],
  providers: [
    CoursesService,
    ShoppingCartService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
