import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  cookieService: CookieService = inject(CookieService);
  router: Router = inject(Router);
  isLoggedIn: boolean = false;
  private _userSubject: Subscription
  currentUser: string = '';
  userId: number;

  ngOnInit() {

    this._userSubject = this.authService.userSubject.subscribe((user) => {
      if(!this.isLoggedIn){
        this.isLoggedIn = !!user;
      }
    });

    if(+this.authService.getCookies() !== 0){
      console.log(this.authService.getCookies())
      this.isLoggedIn = true;
    }
    console.log(this.isLoggedIn);

  }

  ngOnDestroy() {
    this._userSubject.unsubscribe();
  }

  logout(){
    this.isLoggedIn = false;
    this.cookieService.delete('userId');
    this.authService.logout();
  }

  navigateDashboard(){
    console.log("in nav func");
    this.currentUser = this.authService.currentUser;
    const location = this.currentUser;
    console.log(location)
    this.router.navigate(['/dashboard/',location]);
  }
}
