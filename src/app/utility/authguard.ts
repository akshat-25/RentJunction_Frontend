import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

export const canActivate = () => {
    
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

        if(+authService.getCookies() === 1){
            return true;
        }

        else{
            authService.logout();
            router.navigate(['/login']);
            return false;
        }
    }

