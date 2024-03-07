import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router);
  categoryProducts: any;
  cityProducts: any;
  layout: string = "list";
  city: string;
  id: number;
  ngOnInit() {
    const url = this.activatedRoute.snapshot.url;
    console.log();
    
    if (this.activatedRoute.snapshot.params['type'] === 'city'){
      this.city =  url[url.length - 1].path;
      this.productService.getProductByCity(this.city).subscribe({
        next: (products) => {
          console.log(products);
          this.categoryProducts = products;
        }
      })
    
    }
    else{
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.productService.getProductByCategory(this.id).subscribe({
      next: (products) => {
        console.log(products);
        this.categoryProducts = products;
      },
      error: (error) => {
        console.log(error)
      }
    })
    }

  }

  getSeverity(product: any) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
  };

  onRentProduct(product){
    this.productService.productInfoForUpdate(product);
    this.router.navigate(['/dashboard/customer/rent/',product.id]);
  }
}
