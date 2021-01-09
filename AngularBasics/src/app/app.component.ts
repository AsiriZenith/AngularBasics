import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBasics';
  userAdded: boolean = false;

  constructor(private authservice: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userAddedEvent.subscribe(data => {
      this.userAdded = data;
    })
  }

  onLoginClick() {
    this.authservice.login();
  }

  onLogOutClick() {
    this.authservice.logOut();
  }
}
