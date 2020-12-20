import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  //userName: string;
  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('inputPwd') inputPwd: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onuserAddedUn(inputData: HTMLInputElement) {
    //this.userName = inputData.value;
    this.userAdded.emit(inputData.value);
  }

  onuserAddedPwd(){
    console.log(this.inputPwd.nativeElement.value);
    this.userAdded.emit(this.inputPwd.nativeElement.value);
  }
}
