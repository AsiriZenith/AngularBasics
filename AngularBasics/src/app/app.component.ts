import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularBasics'
  userAdded: boolean = false
  userAddedSubscription: Subscription

  constructor(private userService: UserService) {}

  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.userAddedSubscription = this.userService
      .userAddedEventStatue()
      .subscribe((data) => {
        this.userAdded = data
      })
  }

  // onLoginClick() {
  //   this.authservice.login();
  // }

  // onLogOutClick() {
  //   this.authservice.logOut();
  // }
}
