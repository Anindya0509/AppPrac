import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.css'
})
export class ActionsButtonComponent {
  
  constructor(private router: Router){}

  prodData: Product = new Product();

  newListCart: Product[] = JSON.parse(localStorage.getItem("addedToCartProducts"));
  newListWishlist: Product[] = JSON.parse(localStorage.getItem("addedToWishlistProducts"));

  agInit(params: ICellRendererParams): void {
    this.prodData.id = params.data.id;
    this.prodData.name = params.data.name;
    this.prodData.desc = params.data.desc;
    this.prodData.price = params.data.price;
    this.prodData.rating = params.data.rating;
    this.prodData.productQuan = params.data.productQuan;
    this.prodData.prodImg = params.data.prodImg;
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
