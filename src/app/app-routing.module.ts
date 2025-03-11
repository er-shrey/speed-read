import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'read-book/:id',
    loadChildren: () => import('./read-book/read-book.module').then(m => m.ReadBookModule)
  }
];

routes.push(
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
