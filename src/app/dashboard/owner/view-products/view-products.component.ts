import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit{
  
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router); 
  products: any[];
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit() {
    this.productService.getProductforOwner();
    this.productService.products.subscribe((prod) => {
      this.products = prod;
    })
  }
  
  confirm2(event: Event, id: number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            this.productService.deleteProduct(id).subscribe(() => {
              this.products = this.products.filter(product => product.id !== id);
            });
        },
        reject: () => {
        }
    });
  }

  onUpdate(id: number){
    let product = this.products.find((prod) => {
      if(prod.id === id)
        return prod; 
    });

    this.productService.productInfoForUpdate(product);
    this.router.navigate(['/dashboard/owner/update-product']);

  }

}
