import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ViewProductsComponent } from './owner/view-products/view-products.component';
import { AddProductComponent } from './owner/add-product/add-product.component';


const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path:'owner', children: [
    {path: '', component: OwnerComponent},
    {path: 'view-products', component: ViewProductsComponent},
    {path: 'add-product', component: AddProductComponent},
  ]},
  
]

@NgModule({
  declarations: [
    CustomerComponent,
    OwnerComponent,
    ViewProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    CardModule,
    TagModule,
    TableModule,
    RatingModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
})
export class DashboardModule { }
