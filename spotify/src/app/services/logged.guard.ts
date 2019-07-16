import { Injectable, Inject } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedGuard implements CanActivate{

    constructor(private authService: AuthService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean{
        const isLoggedIn = this.authService.isLoggedIn();
        console.log('Can activate', isLoggedIn)
        return isLoggedIn;
    }
}


