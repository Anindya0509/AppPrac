import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.css'
})
export class ActionsButtonComponent {
  agInit(params: ICellRendererParams): void {}
    refresh(params: ICellRendererParams) {
        return true;
    }
    cartButtonClicked() {
        alert('Cart Launched');
    }
    wishlistButtonClicked() {
      alert('Wishlist Launched');
  }
}
