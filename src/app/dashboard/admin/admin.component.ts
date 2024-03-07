import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  ngOnInit() {
    this.authService.isAdminLoggedIn = true;
  }

  options = [
    {
      id: 1,
      header: 'View All Customers',
      subheader: 'Get some actions performed on the Customers!',
      image: 'https://img.freepik.com/premium-vector/girl-doing-online-shopping-by-smartphone_701961-2321.jpg?w=996',
      description: "loLorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
      labelButton: 'View Customers'
    },

    {
      id: 2,
      header: 'View All Vendors',
      subheader: 'Get some actions performed on the Vendors!',
      image: 'https://img.freepik.com/premium-vector/online-shopping-concept-woman-chooses-buys-products-online-store-flat-illustration_138260-667.jpg?w=740',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis ",
      labelButton: 'View Vendors'
    },

    {
      id: 3,
      header: 'Add new Admin',
      subheader: 'Add a new admin and manage them!',
      image: 'https://img.freepik.com/free-vector/consumer-demand-abstract-concept_335657-3109.jpg?t=st=1709479512~exp=1709480112~hmac=90cb7459a54cb3147fb8e574a55a7e9cd7f485eced8586791cce4a13004aeff6',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
      labelButton: 'Add Admin'
    },
  ]

  navigation(id: number){
    console.log(id);
    switch (id) {
      case 1:
        this.router.navigate(['dashboard/admin/', 'customers']);
        break;
      case 2: 
        this.router.navigate(['dashboard/admin/', 'owners']);
        break;
      case 3:
        this.router.navigate(['/register']);
        break;
      default:
        break;
    }
  }
}
