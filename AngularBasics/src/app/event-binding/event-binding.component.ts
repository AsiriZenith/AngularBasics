import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public name = "";

  boolValue : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  logMassage(value){
    console.log(value)
    this.boolValue=true;
    this.name=value
  }

  onClick(){
    this.name="Asiri";
    this.boolValue=true;
    alert('Hi Asiri')
  }

  buttonMouseOver(value){
    alert('Hi machan');
    this.name=value;
    this.boolValue=true;
  }
}
