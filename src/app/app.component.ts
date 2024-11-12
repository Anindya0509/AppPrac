import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AlertNotificationComponent } from './alert-notification/alert-notification.component';
import { Product } from './models/product.model';
import { BadgeCountService } from './Service/badge-count.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,AlertNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ALIMAMA';
  wishlistCount: number = 0;
  cartCount: number = 0;
  newListWishlist: Product[] = JSON.parse(localStorage.getItem("addedToWishlistProducts"));
  newListCart: Product[] = JSON.parse(localStorage.getItem("addedToCartProducts"));   

  constructor(private badgeCountService: BadgeCountService){
    this.badgeCountService.setCartBadgeCount(this.newListCart.length);
    this.badgeCountService.setWishlistBadgeCount(this.newListWishlist.length);
    this.badgeCountService.wishlistBadgeCount.subscribe((wishlist) => {this.wishlistCount = wishlist;})
    this.badgeCountService.cartBadgeCount.subscribe((cart) => {this.cartCount = cart;})
    this.wishlistCount = this.badgeCountService.getWishlistBadgeCount();
    this.cartCount = this.badgeCountService.getCartBadgeCount();
    console.log("from app component" + this.wishlistCount + " " +  this.cartCount);
  }

  
}
