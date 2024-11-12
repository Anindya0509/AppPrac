import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeCountService {

  wishlistBadgeCount= new BehaviorSubject<number>(0);
  cartBadgeCount= new BehaviorSubject<number>(0);

  setWishlistBadgeCount(value:number){
    this.wishlistBadgeCount.next(value);
  }

  getWishlistBadgeCount(): number{
    return this.wishlistBadgeCount.value;
  }

  setCartBadgeCount(value:number){
    this.cartBadgeCount.next(value);
  }

  getCartBadgeCount(): number{
    return this.cartBadgeCount.value;
  }

  constructor() { }
}
