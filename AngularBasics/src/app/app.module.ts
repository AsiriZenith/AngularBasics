import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user/user.component';
import { Users2Component } from './components/users2/users2.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { heighlightTextDirective } from './directives/heighlightText.directive';
import { RenderHighlightDirective } from './directives/render-highlight.directive';
import { AlternateIfDirective } from './directives/alternateIf.directive';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth.guard.service';
import { DeactivateGuardService } from './services/deactivate.guard.service';
import { UserResolveService } from './services/user.resolve.service';
import { UserService } from './services/user.service';
import { TemplateFormComponent } from './components/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    Users2Component,
    AddUserComponent,
    heighlightTextDirective,
    RenderHighlightDirective,
    AlternateIfDirective,
    HomeComponent,
    PersonComponent,
    CategoriesComponent,
    EditUserComponent,
    PageNotFoundComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DeactivateGuardService,
    UserService,
    UserResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
