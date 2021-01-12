import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth.guard.service';
import { DeactivateGuardService } from './services/deactivate.guard.service';
import { UserResolveService } from './services/user.resolve.service';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonComponent } from './components/person/person.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FilterPipesComponent } from './components/filter-pipes/filter-pipes.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HomeComponent, data: { page: 1, search: 'Asenith' } },
  {
    path: 'users',
    component: PersonComponent,
    canActivateChild: [AuthGuardService],
    resolve: { user: UserResolveService },
    children: [
      { path: ':id/:name', component: PersonComponent },
      { path: ':id/:name/edit', component: EditUserComponent, canDeactivate: [DeactivateGuardService] }]
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'reactiveForm', component: ReactiveFormsComponent },
  { path: 'filterPipes', component: FilterPipesComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
