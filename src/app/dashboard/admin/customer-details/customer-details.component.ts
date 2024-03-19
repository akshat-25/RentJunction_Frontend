import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit{
  userService: UserService = inject(UserService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  users: any[];
  query: string;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  ngOnInit() {
    
     this.query = this.activatedRoute.snapshot.params['type'];
    
    if(this.query === 'customers'){
      this.userService.getCustomers();
      this.userService.users.subscribe((users) => {
        this.users = users;
        console.log(this.users)
      });
    }
    else{
      this.userService.getOwners();
      this.userService.users.subscribe((users) => {
        this.users = users;
        console.log(this.users)
      });
    }
  }

  confirm2(event: Event, id: number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this user?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'User deleted' });
            this.userService.deleteUser(id).subscribe(() => {
              this.users = this.users.filter(user => user.id !== id);
            });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Cancelled', detail: 'You have cancelled' });
        }
    });
  }
}
