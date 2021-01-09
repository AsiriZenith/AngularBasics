import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allowNewUser: boolean = false;
  statusValue: boolean = false;
  userName: string = "TypeScript";
  userStatus: string;
  users = [];

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  changeUserCreatedStatus() {
    this.statusValue = true;
    this.users.push(this.userName);
  }

  onUpdateuser(event) {
    this.userName = event.target.value;
  }

  getColor() {
    if (this.userStatus === 'online') {
      return 'yellow'
    }
    else if (this.userStatus === 'offline') {
      return 'red'
    }
  }

  onUserAdded(){
    
  }
}
