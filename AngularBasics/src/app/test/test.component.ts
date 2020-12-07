import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "Asiri"

  myId = "testId"

  isButtonDesable: boolean = false;

  inputValue: String = "MAnjitha"

  successClass = "text-success";

  hasError = true;

  isSpecial = true;

  massageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  imgSource: string = "https://th.bing.com/th/id/OIP.O53DC8RKcGoQ8zKNlKdaagHaF7?w=240&h=192&c=7&o=5&pid=1.7";

  constructor() { }

  ngOnInit(): void {
  }

}
