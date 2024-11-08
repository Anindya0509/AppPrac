import { Component } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  newListWishlist: Product[] = JSON.parse(localStorage.getItem("addedToWishlistProducts"));  

  deleteFormWishlist(i:number){
    this.newListWishlist.splice(i,1);
    localStorage.setItem("addedToWishlistProducts",JSON.stringify(this.newListWishlist));
  }
}
