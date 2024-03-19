import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
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
  userIdSubject = new BehaviorSubject(null);
  userId: number;
  isAdminLoggedIn: boolean = false;
  currentUser: string = '';
  isUserLoggedIn: boolean = false;

  setCookies(){
    let id  = String(this.userId);
    this.cookieService.set("userId",id);
  }

  getCookies(){
    return +this.cookieService.get("userId");
  }


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
        
        console.log(res);
        this.userIdSubject.next(res.userId);
        this.userId = res.userId;
        this.userSubject.next(res);
        this.setCookies();

      })
    );
  }

  getUserId(id: number){
    this.userId = id;
    console.log(this.userId);
  }

  logout(){
    this.userSubject.next(null);
    this.cookieService.delete('userId');
    this.router.navigate(['/login'])
  }
}
