import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonComponent } from './components/person/person.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: PersonComponent, children: [
      { path: ':id/:name', component: PersonComponent },
      { path: ':id/:name/edit', component: EditUserComponent }]
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
