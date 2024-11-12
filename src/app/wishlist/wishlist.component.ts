import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { AlertService } from '../Service/alert.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  newListWishlist: Product[] = JSON.parse(localStorage.getItem("addedToWishlistProducts")); 
  constructor(private router:Router, private alertService: AlertService) {}

  deleteFormWishlist(i:number){
    this.newListWishlist.splice(i,1);
    localStorage.setItem("addedToWishlistProducts",JSON.stringify(this.newListWishlist));
    this.alertService.success('Item has been deleted from wishlist Successfully!!',this.alertService.options);
    
  }
  backToDash(){
    this.router.navigate(['dashboard']);
  }
}
