import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadBookRoutingModule } from './read-book-routing.module';
import { ReadBookComponent } from './read-book.component';


@NgModule({
  declarations: [
    ReadBookComponent
  ],
  imports: [
    CommonModule,
    ReadBookRoutingModule
  ]
})
export class ReadBookModule { }
