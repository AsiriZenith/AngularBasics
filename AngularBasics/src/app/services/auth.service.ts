import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/Operators'
import { AuthResponseVM } from '../components/auth/auth.responsedata'
import { User } from '../components/auth/user.model'

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
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser))
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseVM>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYa9Cu7wvSPPxvArRbjYN66Hz4bBs6_kM`,
        { email, password, returnSecureToken: true },
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser))
  }

  private handleUser(res: AuthResponseVM) {
    const expireDate = new Date(new Date().getTime() + +res.expiresIn * 1000)
    const user = new User(res.email, res.localId, res.idToken, expireDate)
  }

  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'An error occured!!'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email Already Exists'
        break
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Not Found'
        break
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password'
    }
    return throwError(errorMessage)
  }

  logOut() {
    this.isLoggedIn = false
  }

  IsAuthenticated() {
    return this.isLoggedIn
  }
}
