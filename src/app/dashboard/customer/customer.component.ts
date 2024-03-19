import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  router: Router = inject(Router);
  options = [
    {
      id: 1,
      header: 'Browse Product By Categories',
      subheader: 'Unlock Earnings with Your Stuff!',
      image: 'https://img.freepik.com/premium-vector/girl-doing-online-shopping-by-smartphone_701961-2321.jpg?w=996',
      description: "Got cool items collecting dust? Time to cash in! Introducing our 'Add Product for Rent' feature – your gateway to effortless earnings. List your items, set your terms, and let others experience what you have to offer. It's quick, easy, and the best way to make your belongings work for you.",
      labelButton: 'Browse Categories'
    },

    {
      id: 2,
      header: 'Browse Product By City',
      subheader: 'Your Collection, Your Earnings!',
      image: 'https://img.freepik.com/premium-vector/online-shopping-concept-woman-chooses-buys-products-online-store-flat-illustration_138260-667.jpg?w=740',
      description: " From gadgets to fashion, this virtual showcase allows you to witness the value you've created. It's not just about ownership; it's about the satisfaction of turning every item into an opportunity. Dive into your collection today, where each piece tells a story of shared joy and growing earnings. ",
      labelButton: 'View Products'
    },

    {
      id: 3,
      header: 'View Products Rented By You',
      subheader: 'Manage your rented items',
      image: 'https://img.freepik.com/free-vector/sales-promotion-concept-illustration_114360-18718.jpg?t=st=1709662812~exp=1709666412~hmac=628127936abef3827e657a50eebe527bc46a4ad859f2519e7acf87f9b72454dc&w=740',
      description: " Explore your rental journey effortlessly with our 'View Rented Products' feature. Seamlessly track and manage your rented items in one convenient place. Instantly access details, rental durations, and stay organized with a snapshot of your rented products for a hassle-free and enjoyable experience",
      labelButton: 'View Rentals'
    },
  ]

  navigation(id: number){
    console.log(id);
    switch (id) {
      case 1:
        this.router.navigate(['dashboard/customer/categories']);
        break;
      case 2: 
        this.router.navigate(['dashboard/customer/city']);
        break;
      case 3:
        this.router.navigate(['dashboard/customer/rentals']);
        break;
      default:
        break;
    }
  }
}
