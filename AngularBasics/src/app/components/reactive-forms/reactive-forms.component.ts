import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
        'email': new FormControl(null, [Validators.required, Validators.email], this.isRestrictedEmails)
      }),
      'gender': new FormControl('femail'),
      'hobbies': new FormArray([])
    });
    this.signUpForm.valueChanges.subscribe(value => {
      console.log(value);
    });
    this.signUpForm.patchValue({
      userData: {
        // username:'Manjitha',
        email: 'asd@gmail.com'
      },
      gender: 'male',
      hobbies: []
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  isRestrictedNames(control: FormControl): { [s: string]: boolean } {
    if (this.restrictedNames.includes(control.value)) {
      return { nameIsRestricted: true };
    } else {
      return null;
    }
  }

  isRestrictedEmails(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'p.s.jayawickrama@gmail.com') {
          resolve({ emailIsRestricted: true });
        } else {
          resolve(null);
        }
      }, 2000)
    });
    return promise;
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

}
