import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rent-product',
  templateUrl: './rent-product.component.html',
  styleUrl: './rent-product.component.css'
})
export class RentProductComponent implements OnInit{
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  extendRent: boolean = false;
  visible: boolean = false;
  startDate: string;
  endDate: string;
  totalDays: any;
  product: any;
  ngOnInit(){
  this.product = this.productService.getProductInfoForUpdate();
    
  }

  onFormSubmit(){
    this.productService.productInfoForUpdate(this.product,this.totalDays);
    this.productService.getStartEndDate(this.startDate, this.endDate);
    this.router.navigate(['./checkout'],{relativeTo: this.activatedRoute});
  }

  showDialog() {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    console.log(typeof(this.startDate));
    console.log(this.startDate);
    this.calculateDaysDifference(startDate,endDate);
    this.visible = true;
}

calculateDaysDifference(startDate,endDate) {
  const timeDifference = endDate.getTime() - startDate.getTime();

  this.totalDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}
}
