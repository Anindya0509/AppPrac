import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { Product } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.css'
})
export class ActionsButtonComponent {
  
  constructor(private router: Router){}

  prodData: Product = {id:0, name: '', desc: '', price: 0, rating: 0};

  //to initialize locastorage object, to be commented after fisrt time
  //newListCart: Product[] = [];
  //newListWishlist: Product[] = [];

  newListCart: Product[] = JSON.parse(localStorage.getItem("addedToCartProducts"));
  newListWishlist: Product[] = JSON.parse(localStorage.getItem("addedToWishlistProducts"));

  agInit(params: ICellRendererParams): void {
    this.prodData.id = params.data.id;
    this.prodData.name = params.data.name;
    this.prodData.desc = params.data.desc;
    this.prodData.price = params.data.price;
    this.prodData.rating = params.data.rating;
  }
    refresh(params: ICellRendererParams) {
        return true;
    }
    cartButtonClicked() {
      this.newListCart.push(this.prodData);
      localStorage.setItem("addedToCartProducts",JSON.stringify(this.newListCart));
     
      this.router.navigate(['cart']);
    }
    wishlistButtonClicked() {
      this.newListWishlist.push(this.prodData);
      localStorage.setItem("addedToWishlistProducts",JSON.stringify(this.newListWishlist));
     
      this.router.navigate(['wishlist']);
  }
}
