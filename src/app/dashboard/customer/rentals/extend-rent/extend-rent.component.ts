import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-extend-rent',
  templateUrl: './extend-rent.component.html',
  styleUrl: './extend-rent.component.css'
})
export class ExtendRentComponent implements OnInit{
  product: any;
  productService: ProductService = inject(ProductService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  totalDays: number;
  startDate: Date;
  endDate: Date;
  newEndDate: Date;
  visible: boolean = false;
  rent: number;

  ngOnInit(){
    this.product = this.productService.extendRentProduct;
    this.startDate = new Date(this.product.startDate);
    this.endDate = new Date(this.product.endDate);
    this.rent  =  this.product.price/ this.calculateDaysDifference(this.startDate,this.endDate);
    console.log(this.startDate)
    console.log(this.endDate)
  }

  onFormSubmit(){
    this.productService.productInfoForUpdate(this.product,this.totalDays);
    this.productService.getStartEndDate(this.endDate, this.newEndDate);
    this.productService.isExtendRent = true;
    this.productService.newEndDate = this.newEndDate;
    this.router.navigate([`/dashboard/customer/extend-rent/${this.product.id}/checkout`]);
  }

  showDialog() {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    const newEndDate = new Date(this.newEndDate);

    console.log(typeof(this.startDate));
    console.log(this.startDate);
    this.totalDays = this.calculateDaysDifference(endDate,newEndDate);
    this.visible = true;
}

calculateDaysDifference(startDate,endDate) {
  const timeDifference = endDate.getTime() - startDate.getTime();
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

}
