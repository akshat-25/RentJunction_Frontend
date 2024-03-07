import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SnackBarComponent } from '../utility/snack-bar/snack-bar.component';
import { LoaderComponent } from '../utility/loader/loader.component';
import { InputTextModule } from 'primeng/inputtext';
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button'
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SnackBarComponent,
    LoaderComponent,
    ToastModule,
    InputTextModule,
    StyleClassModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
   providers: [MessageService]
})
export class AuthModule { }
