import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;

  constructor(public authService: AuthService) { 
    this.message = '';
   }

   login(user: string, password: string): boolean{
    if(!this.authService.login(user, password)){
      this.message = 'Wrong credentials!';
      setTimeout(function(){
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
   }

   logout(): boolean{
    this.authService.logout();
    return false;
   }

  ngOnInit() {
  }

}
