import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

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
import { PostService } from './services/posts.service'
import { AuthInterceptorService } from './services/auth.Interceptor.service'
import { LogginInterceptorService } from './services/loggin.Interceptor.service'
import { AuthComponent } from './components/auth/auth.component'
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading.spinner.component';
import { NavigationComponent } from './components/navigation/navigation.component'

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
    AuthComponent,
    LoadingSpinnerComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogginInterceptorService,
      multi: true,
    },
    AuthService,
    AuthGuardService,
    DeactivateGuardService,
    UserService,
    UserResolveService,
    PostService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
