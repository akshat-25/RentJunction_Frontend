import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.css',
  standalone: true
})
export class SnackBarComponent {
  @Input()
  errorMessage: string | null = null;
}
