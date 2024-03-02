import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService: AuthService = inject(AuthService);
  isLoading: boolean = false;
  errorMessage: string | null = null;

  onFormSubmitted(form: NgForm) {
    this.isLoading = true
    const data = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      userName: form.value.userName,
      password: form.value.password,
      city: form.value.city,
      phoneNumber: String(form.value.phoneNumber),
      email: form.value.email,
      roleId: +form.value.role,
    };

    this.authService.userRegistration(data).subscribe({
      next: (response) => {
        console.log("In register")
        console.log(response);
        this.isLoading = false;
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
