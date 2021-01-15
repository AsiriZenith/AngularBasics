import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/Operators'
import { AuthResponseVM } from '../components/auth/auth.responsedata'

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn: boolean = false

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseVM>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYa9Cu7wvSPPxvArRbjYN66Hz4bBs6_kM`,
        { email, password, returnSecureToken: true },
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An error occured!!'
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage)
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'Email Already Exists'
          }
          return throwError(errorMessage)
        }),
      )
  }

  login() {
    this.isLoggedIn = true
  }

  logOut() {
    this.isLoggedIn = false
  }

  IsAuthenticated() {
    return this.isLoggedIn
  }
}
