import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { AuthResponseVM } from './auth.responsedata'

@Component({
  selector: 'app-authentication',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLogginMode: boolean = true
  isLoading: boolean = true
  error: string = null

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  onSwitchMode() {
    this.isLogginMode = !this.isLogginMode
  }

  onFormSubmit(authform: NgForm) {
    if (!authform.valid) {
      return
    }
    let authObs: Observable<AuthResponseVM>
    this.isLoading = true
    if (this.isLogginMode) {
      //Perform loggin call
      authObs = this.authservice.login(
        authform.value.email,
        authform.value.password,
      )
    } else {
      authObs = this.authservice.signUp(
        authform.value.email,
        authform.value.password,
      )
    }
    authObs.subscribe(
      (res) => {
        console.log(res)
        this.isLoading = false
      },
      (errorMessage) => {
        console.log(errorMessage)
        this.error = errorMessage
        this.isLoading = false
      },
    )
  }
}
