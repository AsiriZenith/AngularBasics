import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  filterString: string = "";

  appStatus = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve('Users Data Resolved');
    }, 3000);
  })

  users = [{
    name: 'Asiri',
    joinedDate: new Date(12, 1, 2021)
  },
  {
    name: 'Senith',
    joinedDate: new Date(13, 1, 2021)
  },
  {
    name: 'Manjitha',
    joinedDate: new Date(14, 1, 2021)
  }];

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser() {
    this.users.push({
      name: 'Sam',
      joinedDate: new Date(19, 9, 2019)
    })
  }

}
