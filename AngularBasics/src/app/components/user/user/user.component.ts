import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Console } from 'console';
import { element } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() username: string;
  @Input() name: string;

  constructor() {
    console.log('constructor call');
  }

  ngOnDestroy(): void {
    console.log('ng OnDestroy called');
  }

  ngAfterViewChecked(): void {
    console.log('ng After View Checked called');
  }

  ngAfterViewInit(): void {
    console.log('ng After View Init called');
  }

  ngAfterContentChecked(): void {
    console.log('ng After Content Checked called')
  }

  ngAfterContentInit(): void {
    console.log('ng After Content Init called');
  }

  ngDoCheck(): void {
    console.log('DoCheck called');
  }

  ngOnChanges(element: SimpleChanges): void {
    console.log('ngOnChanges call');
    console.log(element);
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
  }

}
