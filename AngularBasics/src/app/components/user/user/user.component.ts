import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input() username: string;
  @Input() name : string;

  constructor() {
    console.log('constructor call');
  }
  ngOnChanges(element: SimpleChanges): void {
    console.log('ngOnChanges call');
    console.log(element);
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
  }

  

}
