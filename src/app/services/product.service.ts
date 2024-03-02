import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Subject, Subscription } from "rxjs";
import { User } from "../models/user";

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
    products: any;
    getProductforOwner(){
        this.http.get('https://localhost:44375/api/Product/ViewProducts').subscribe((prod) => {
            console.log(prod)
            this.products = prod;
        })
    }

}