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
      next: (user: any) => {
        this.authService.getUserId(user.userId);
        console.log(user.roleId)
        this.isLoading = false;
        if (user.roleId === 2) {
          this.authService.currentUser = 'customer'
          this.router.navigate(['/dashboard/customer']);
        } else if(user.roleId === 3){
          this.authService.currentUser = 'owner'
          this.router.navigate(['/dashboard/owner']);
        }
        else if(user.roleId === 1){
          this.authService.currentUser = 'admin'
          this.router.navigate(['/dashboard/admin']);
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

