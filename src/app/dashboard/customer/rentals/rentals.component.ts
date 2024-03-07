import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.css'
})
export class RentalsComponent {

  productService: ProductService = inject(ProductService);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router); 
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  products: any;
  userId: any;

  ngOnInit() {
    this.productService.getRentals().subscribe({
      next: (prod) => {
        console.log(prod);
        this.products = prod;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  extendRent(productId: number,product: any){
    this.productService.getProductForExtendRent(product);
    this.router.navigate([`./extend-rent/${productId}`], { relativeTo: this.activatedRoute });
  }
  
}
