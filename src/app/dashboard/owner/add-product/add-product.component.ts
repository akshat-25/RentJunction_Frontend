import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
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

  productService: ProductService = inject(ProductService);
  isLoading: boolean = false;
  errorMessage: string | null = null;
  router: Router = inject(Router);

  onAddProduct(form: NgForm){
    const productDetails = {
      name: form.value.productName,
      rent: +form.value.productRent,
      city: form.value.productCity,
      description: form.value.productDesc,
      categoryId: +form.value.categoryId
    }

    this.productService.addProduct(productDetails).subscribe({
      next: () => {
        this.productService.getProductforOwner(); 
        this.router.navigate(['/dashboard/owner/view-products'])
      },
      error: (errMsg) => {
        this.isLoading = false;
        this.errorMessage = errMsg;
        this.hideSnackBar();
      },
    })
  }
  hideSnackBar() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

}
