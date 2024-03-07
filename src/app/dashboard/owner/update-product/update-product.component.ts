import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router);
  product : any;

  ngOnInit(): void {
   this.product = this.productService.getProductInfoForUpdate();
  }
  cities: any[] = [
    { name: 'Delhi', id: 1 },
    { name: 'Noida', id: 2 },
    { name: 'Gurugram', id: 3 },
    { name: 'Jaipur', id: 4 },
    { name: 'Mumbai', id: 5 },
    { name: 'Amhedabad', id: 6 },
  ];
  categories: any[] = [
    { name: 'Property', id: 1 },
    { name: 'Electornics', id: 2 },
    { name: 'Computer Accessories', id: 3 },
    { name: 'Audio Visual', id: 4 },
    { name: 'Security Systems', id: 5 },
    { name: 'Clothing and Jewellery', id: 6 },
    { name: 'Generators', id: 7 },
    { name: 'Media Entertainment Equipments', id: 8 },
    { name: 'Vehicles', id: 9 },
    { name: 'Furniture', id: 10 },
    { name: 'HealthCare', id: 11 },
    { name: 'Miscellaneous', id: 12 },
  ];


  onUpdate(form: NgForm){
    const productDetails = {
      name: form.value.productName,
      rent: +form.value.productRent,
      city: form.value.productCity,
      description: form.value.productDesc,
      categoryId: +form.value.categoryId
    }

    this.productService.updateProduct(this.product.id,productDetails).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/owner/view-products']);
      }
    })
  }



}
