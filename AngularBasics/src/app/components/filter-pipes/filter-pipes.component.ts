import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  filterString: string = "";

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

}
