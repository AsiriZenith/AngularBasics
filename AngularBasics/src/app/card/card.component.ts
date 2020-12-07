import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  hasError : boolean = true;

  title : string = "Asiri";

  highlightColor : string = "orange";

  titleStyle = {
    color : 'blue',
    fontStyle : 'italic'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
