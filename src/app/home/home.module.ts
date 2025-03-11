import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { RatingsComponent } from './components/ratings/ratings.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookDetailComponent,
    RatingsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
