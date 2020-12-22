import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit {

  usersList = [];
  name = "Asiri Senith";

  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded(event: string) {
    this.usersList.push(event);
  }

  onNameChanged(){
    this.name="Senith";
  }

}
