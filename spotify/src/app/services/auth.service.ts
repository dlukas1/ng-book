import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    login(user: string, password: string): boolean{
        if(user === 'user' && password === 'user'){
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    }

    logout(): any{
        localStorage.removeItem('username');
    }

    getUser(): any {
        return localStorage.getItem('username');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}

export const AUTH_PROVIDERS: Array<any> = [
    {provide: AuthService, useClass: AuthService}
];
// TODO add 'LIKE' and show it in personal history