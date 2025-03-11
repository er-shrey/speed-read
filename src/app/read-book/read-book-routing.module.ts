import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadBookComponent } from './read-book.component';

const routes: Routes = [
  {
    path: '', component: ReadBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadBookRoutingModule { }
