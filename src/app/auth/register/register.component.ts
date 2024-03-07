import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  isLoading: boolean = false;
  errorMessage: string | null = null;
  isAdminLoggedIn: boolean = false;

  constructor(private messageService: MessageService) {}


  ngOnInit(){
    this.isAdminLoggedIn = this.authService.isAdminLoggedIn;
  }

  onFormSubmitted(form: NgForm) {
    
    let data : Object; 
    this.isLoading = true
    if(!this.isAdminLoggedIn){
       data = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        userName: form.value.userName,
        password: form.value.password,
        city: form.value.city,
        phoneNumber: String(form.value.phoneNumber),
        email: form.value.email,
        roleId: +form.value.role,
      };
    }
    else{
      data = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        userName: form.value.userName,
        password: form.value.password,
        city: form.value.city,
        phoneNumber: String(form.value.phoneNumber),
        email: form.value.email,
      };
    }

    this.authService.userRegistration(data).subscribe({
      next: (response) => {
        console.log("In register")
        console.log(response);
        this.isLoading = false;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
        this.messageService.add({ severity: 'info', detail: 'Successfully Registered' });

      },
      error: (errMsg) => {
        this.isLoading = false;
        this.errorMessage = errMsg;
        this.hideSnackbar();
      },
    });
  
    form.reset();
  }



  hideSnackbar(){
    setTimeout(() => {
      this.errorMessage = null
    }, 3000);
  }
}
