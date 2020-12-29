import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/loggin.services';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css'],
  providers: [LoggingService]
})
export class Users2Component implements OnInit {

  usersList = [];
  name = "Asiri Senith";
  isAvailable: boolean = true;
  value: string = '100';

  constructor(private logginServices: LoggingService) { }

  ngOnInit(): void {
  }

  onUserAdded(event: string) {
    this.usersList.push(event);
  }

  onNameChanged() {
    this.name = "Senith";
    this.logginServices.logToConsole("username is changed "+this.name);
  }

}
