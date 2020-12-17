import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allowNewUser: boolean = false;
  userCreatedStatus: string = "No user Created!!";
  statusValue: boolean = false;
  userName: string = "TypeScript";
  userStatus: string;

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  changeUserCreatedStatus() {
    this.userCreatedStatus = "User is Created!!";
    this.statusValue = true;
  }

  onUpdateuser(event) {
    this.userName = event.target.value;
    console.log(this.userName)
  }

  getColor() {
    if (this.userStatus === 'online') {
      return 'green'
    }
    else if (this.userStatus === 'offline') {
      return 'red'
    }
  }

}
