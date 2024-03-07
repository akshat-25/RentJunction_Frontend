import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Subject, Subscription, catchError, throwError } from "rxjs";
import { formatDate } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    http: HttpClient = inject(HttpClient);
    authService: AuthService = inject(AuthService)
    errorSubject = new Subject<HttpErrorResponse>
    roleId: number;
    userName: string;
    user: Subscription
    productSubjet = new Subject<any[]>();
    products = this.productSubjet.asObservable();
    updateProductDetail: Object;
    totalDaysForRent: number;
    startDate: any;
    endDate: any;
    newEndDate: any;
    extendRentProduct: any;
    isExtendRent: boolean = false;

    getProductforOwner(){
        return this.http.get('https://localhost:44375/api/Product/ViewProducts').subscribe((prod: any) => {
            this.productSubjet.next(prod);
        })
    }

    addProduct(productDetails: Object){
        return this.http.post('https://localhost:44375/api/Product',productDetails,{responseType: 'text'}).pipe(
            catchError((err: HttpErrorResponse) => {
            console.log(err);
              return throwError(() => err.error.Message);
            }),
          );
    }

    deleteProduct(productId: number){
        return this.http.delete(`https://localhost:44375/api/Product/${productId}`).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }

    productInfoForUpdate(product: object, totalDays: number = 0){
        this.updateProductDetail =  product;
        this.totalDaysForRent = totalDays;
    }

    getProductInfoForUpdate(){
        return this.updateProductDetail;
    }

    updateProduct(id: number,product: Object){
        return this.http.put(`https://localhost:44375/api/Product/${id}`,product).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }



    getProductByCategory(id: number){
        console.log("In category select of product service");
        return this.http.get('https://localhost:44375/api/Product',{
            params: {categoryId: id}
        }).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }

    getProductByCity(city: string){
        console.log(city);
        return this.http.get('https://localhost:44375/api/Product',{
            params: {city: city}
        }).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }

    getStartEndDate(startDate, endDate){
        this.startDate = startDate;
        this.endDate = endDate;
    }


    rentProduct(rentProductId: number){
        const dates = {
            startDate: this.convertDateFormat(this.startDate),  
            endDate: this.convertDateFormat(this.endDate)
        }
        console.log(dates);

        return this.http.post(`https://localhost:44375/api/Product/rental/${rentProductId}`,dates,{
            responseType: 'text'
        }).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }

     convertDateFormat(inputDate: string): string {
        const parts: string[] = inputDate.split('-');
        if (parts.length !== 3) {
          throw new Error('Invalid date format. Please use yyyy-mm-dd.');
        }
      
        const formattedDate: string = `${parts[1]}/${parts[2]}/${parts[0]}`;
        return formattedDate;
      }


    getRentals(){
        return this.http.get(`https://localhost:44375/api/Product/GetRentals/${this.authService.userId}`).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }

    getProductForExtendRent(product: any){
        this.extendRentProduct = product;
    }

    extendRentForProduct(productId: number){
        console.log("In extend rent");
        console.log(productId);
        return this.http.put(`https://localhost:44375/api/Product/extendRent/${productId}`,{
            newEndDate: this.convertDateFormat(this.newEndDate)
        }).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
              return throwError(() => err.error.Message);
            })
          );
    }
}