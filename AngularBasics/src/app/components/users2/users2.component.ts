import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit {

  userName: string;
  usersList = [];

  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded() {
    this.usersList.push(this.userName)
  }

}
