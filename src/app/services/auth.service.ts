import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  userSubject = new BehaviorSubject(null);
  user = this.userSubject.subscribe();
  router: Router = inject(Router);
  cookieService: CookieService = inject(CookieService);
  userId: number;
  isAdminLoggedIn: boolean = false;
  currentUser: string = '';

  userRegistration(data: Object) {
    return this.http.post('https://localhost:44375/api', data).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err.error.Message);
      })
    );
  }

  login(data: Object) {
    return this.http.post('https://localhost:44375/api/login',data)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err.error.Message);
      }),
      tap((res :any) => {
        this.userId = res.id;
        this.userSubject.next(res);
      })
    );
  }

  getUserId(id: number){
    this.userId = id;
    console.log(this.userId);
  }

  logout(){
    this.userSubject.next(null);
    this.router.navigate(['/login'])
  }
}
