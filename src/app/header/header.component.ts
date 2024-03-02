import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  isLoggedIn: boolean = false;
  private _userSubject: Subscription

  ngOnInit() {
    this._userSubject = this.authService.userSubject.subscribe((user: User) => {
      console.log(user)
      this.isLoggedIn = user ? true : false
    });
  }


  ngOnDestroy() {
    this._userSubject.unsubscribe();
  }

  logout(){
    this.authService.logout()
  }
}
