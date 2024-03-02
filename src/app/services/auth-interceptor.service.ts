import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';
import Cookies from 'cookies-js';
 
export class AuthInterceptor implements HttpInterceptor {
  cookieService: CookieService = inject(CookieService);
   
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
  });
  return next.handle(request);
  }
}