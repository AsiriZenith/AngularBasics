import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthResponseVM } from '../components/auth/auth.responsedata'

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn: boolean = false

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseVM>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYa9Cu7wvSPPxvArRbjYN66Hz4bBs6_kM`,
      { email, password, returnSecureToken: true },
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
