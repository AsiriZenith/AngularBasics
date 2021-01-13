import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UsersComponent } from './components/users/users.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserComponent } from './components/user/user/user.component'
import { Users2Component } from './components/users2/users2.component'
import { AddUserComponent } from './components/add-user/add-user.component'
import { heighlightTextDirective } from './directives/heighlightText.directive'
import { RenderHighlightDirective } from './directives/render-highlight.directive'
import { AlternateIfDirective } from './directives/alternateIf.directive'
import { HomeComponent } from './components/home/home.component'
import { PersonComponent } from './components/person/person.component'
import { CategoriesComponent } from './components/categories/categories.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { AuthService } from './services/auth.service'
import { AuthGuardService } from './services/auth.guard.service'
import { DeactivateGuardService } from './services/deactivate.guard.service'
import { UserResolveService } from './services/user.resolve.service'
import { UserService } from './services/user.service'
import { TemplateFormComponent } from './components/template-form/template-form.component'
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component'
import { FilterPipesComponent } from './components/filter-pipes/filter-pipes.component'
import { ShortenPipe } from './Pipes/shorten.pipe'
import { FilterPipe } from './Pipes/filter.pipe'
import { PostsComponent } from './components/posts/posts.component'

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
    TemplateFormComponent,
    ReactiveFormsComponent,
    FilterPipesComponent,
    ShortenPipe,
    FilterPipe,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DeactivateGuardService,
    UserService,
    UserResolveService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
