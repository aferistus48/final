import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {
  this._authService.login().subscribe(() => {
    if(this._authService.isLoggedIn) {
      let redirect = this._authService.redirectUrl ? this.router.parseUrl(this._authService.redirectUrl) : '/user-list';
      this.router.navigateByUrl(redirect);
      }   
    });
  }
  logout() {
    this._authService.logout();
  }

}
