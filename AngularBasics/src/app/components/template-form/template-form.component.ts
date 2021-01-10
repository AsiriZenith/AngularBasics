import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  username: string,
  email: string,
  gender: string,
  about: string
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f') SingUpForm: NgForm;
  gender: string = "male";
  about: string = "";
  submitted: boolean = false;
  user = {
    username: '',
    email: '',
    gender: '',
    about: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.submitted = true;
    this.user.username = this.SingUpForm.value.userData.username;
    this.user.email = this.SingUpForm.value.userData.email;
    this.user.gender = this.SingUpForm.value.gender;
    this.user.about = this.SingUpForm.value.about;
    this.SingUpForm.reset();
  }

  fillValues() {
    this.SingUpForm.form.patchValue({
      userData: {
        email: 'asirisenith@gmail.com',
        username: 'Asiri'
      }
    })
  }

}
