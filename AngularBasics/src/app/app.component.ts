import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';

  constructor(private authservice: AuthService) { }

  onLoginClick() {
    this.authservice.login();
  }

  onLogOutClick() {
    this.authservice.logOut();
  }
}
