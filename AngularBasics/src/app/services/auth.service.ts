
export class AuthService {
    isLoggedIn: boolean = false;

    login() {
        this.isLoggedIn = true;
    }

    logOut() {
        this.isLoggedIn = false;
    }

    IsAuthenticated(){
        return this.isLoggedIn;
    }
}