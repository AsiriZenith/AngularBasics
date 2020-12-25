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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    Users2Component,
    AddUserComponent,
    heighlightTextDirective,
    RenderHighlightDirective,
    AlternateIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
