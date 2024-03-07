import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  isLoggedIn: boolean = false;
  private _userSubject: Subscription
  currentUser: string = '';

  ngOnInit() {
    this._userSubject = this.authService.userSubject.subscribe((user: User) => {
      this.isLoggedIn = user ? true : false
    });
  }

  ngOnDestroy() {
    this._userSubject.unsubscribe();
  }

  logout(){
    this.authService.logout()
  }

  navigateDashboard(){
    console.log("in nav func");
    this.currentUser = this.authService.currentUser;
    const location = this.currentUser;
    console.log(location)
    this.router.navigate(['/dashboard/',location]);
  }
}
