import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f') SingUpForm : NgForm;
  gender: string = "male";
  about: string="";

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log("Submitted the form");
    console.log(this.SingUpForm);
  }

}
