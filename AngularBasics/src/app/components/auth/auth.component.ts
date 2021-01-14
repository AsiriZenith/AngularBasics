import { Component, OnInit } from '@angular/core'
import { FormControl, NgForm } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-authentication',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLogginMode: boolean = true

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    //
  }

  onSwitchMode() {
    this.isLogginMode = !this.isLogginMode
  }

  onFormSubmit(authform: NgForm) {
    if (!authform.valid) {
      return
    }
    if (this.isLogginMode) {
      //Perform loggin call
    } else {
      this.authservice
        .signUp(authform.value.email, authform.value.password)
        .subscribe(
          (res) => {
            console.log(res)
          },
          (error) => {
            console.log(error)
          },
        )
    }
  }

  //   getPasswordErrors(password: FormControl) {
  //     if (password.errors.required) {
  //       return 'password is required'
  //     }
  //     if (password.errors.minlength) {
  //       return 'password is of 4 characters'
  //     }
  //   }
}
