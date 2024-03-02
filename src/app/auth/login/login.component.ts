import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  isLoading: boolean = false;
  errorMessage: string | null = null;
  router: Router = inject(Router);

  onFormSubmitted(form: NgForm) {
    this.isLoading = true;
    const credentials = {
      username: form.value.userName,
      password: form.value.password,
    };

    this.authService.login(credentials).subscribe({
      next: (userRoleId: number) => {
        console.log(userRoleId)
        this.isLoading = false;
        if (userRoleId === 2) {
          this.router.navigate(['/dashboard/customer']);
        } else {
          this.router.navigate(['/dashboard/owner']);
        }
      },
      error: (errMsg) => {
        this.isLoading = false;
        this.errorMessage = errMsg;
        this.hideSnackBar();
      },
    });
    form.reset();
  }

  hideSnackBar() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }
}

