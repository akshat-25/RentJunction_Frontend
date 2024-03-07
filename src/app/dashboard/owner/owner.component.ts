import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent{
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  options = [
    {
      id: 1,
      header: 'Add new product for rent',
      subheader: 'Unlock Earnings with Your Stuff!',
      image: 'https://img.freepik.com/free-vector/new-product-concept-illustration_114360-7031.jpg?w=740&t=st=1709375732~exp=1709376332~hmac=ad71b9b22d5af1d0fc02b2b7815ba5efdddfe94351383775336d45f9e0460bde',
      description: "Got cool items collecting dust? Time to cash in! Introducing our 'Add Product for Rent' feature – your gateway to effortless earnings. List your items, set your terms, and let others experience what you have to offer. It's quick, easy, and the best way to make your belongings work for you. Start sharing the joy (and your items) today!",
      labelButton: 'Add Product'
    },
    {
      id: 2,
      header: 'View Products Owned by You',
      subheader: 'Your Collection, Your Earnings!',
      image: 'https://img.freepik.com/free-vector/consumer-demand-abstract-concept_335657-3109.jpg?t=st=1709479512~exp=1709480112~hmac=90cb7459a54cb3147fb8e574a55a7e9cd7f485eced8586791cce4a13004aeff6',
      description: " From gadgets to fashion, this virtual showcase allows you to witness the value you've created. It's not just about ownership; it's about the satisfaction of turning every item into an opportunity. Dive into your collection today, where each piece tells a story of shared joy and growing earnings. ",
      labelButton: 'View Products'
    },
    
  ]


  navigation(id: number){
    switch (id) {
      case 1:
        this.router.navigate(['dashboard/owner/add-product']);
        break;
      case 2:
        this.router.navigate(['dashboard/owner/view-products']);
        break;
     
      default:
        break;
    }
  }
  
}
