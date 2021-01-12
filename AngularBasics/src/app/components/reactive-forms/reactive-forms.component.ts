import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['male', 'femail'];
  restrictedNames: string[] = ['Asenith'];
  signUpForm: FormGroup;

  constructor() { }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isRestrictedNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('femail'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  isRestrictedNames(control: FormControl): { [s: string]: boolean } {
    if (this.restrictedNames.includes(control.value)) {
      return { nameIsRestricted: true };
    } else {
      return null;
    }
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

}
