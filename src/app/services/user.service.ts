import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { Subject, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    http: HttpClient = inject(HttpClient);
    userSubject = new Subject<any[]>();
    users = this.userSubject.asObservable();
    
    owners: any;
    
    getCustomers(){
         this.http.get('https://localhost:44375/User/viewCustomers').pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          ).subscribe({
            next: (customers: any) => {
              this.userSubject.next(customers)
            },
            error: (error) => {
              console.log(error)
            }
          });;
    }

    getOwners(){
         this.http.get('https://localhost:44375/User/viewOwners').pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          ).subscribe({
            next: (owners: any) => {
                this.userSubject.next(owners)
            },
            error: (error) => {
              console.log(error)
            }
          });;;
    }

    deleteUser(id: number){
        return this.http.delete(`https://localhost:44375/User/${id}`).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }


}