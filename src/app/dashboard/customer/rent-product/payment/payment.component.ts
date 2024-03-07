import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router);
  product: any;
  totalDays: number;
  shippingCharges: number = 99;
  paymentType: string = 'creditCard';
  isLoading: boolean = false;
  isExtend: boolean = false;
  startDateExtend: Date;
  endDateExtend: any;
  rentForExtend: number;
  ngOnInit() {
    this.product = this.productService.getProductInfoForUpdate();
    this.totalDays = this.productService.totalDaysForRent;
    console.log(this.product);
    console.log(this.totalDays);
    this.startDateExtend = new Date(this.product.startDate);
    this.endDateExtend = new Date(this.product.endDate);
    this.rentForExtend  =  this.product.price/ this.calculateDaysDifference(this.startDateExtend,this.endDateExtend);
    this.isExtend =  this.productService.isExtendRent;
    console.log(this.product.productId)
  }

  onFormSubmit(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/dashboard/customer/rentals'])
    }, 3000);
    

    if(!this.isExtend){
      this.productService.rentProduct(this.product.id).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (errMsg) => {
          console.log(errMsg)
        }
      });
    }

    else{
      this.productService.extendRentForProduct(this.product.productId).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (errMsg) => {
          console.log(errMsg)
        }
      });
    }

  }

  calculateDaysDifference(startDate,endDate) {
    const timeDifference = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  }

}
