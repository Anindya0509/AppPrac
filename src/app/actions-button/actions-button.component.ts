import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { AlertService } from '../Service/alert.service';

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.css'
})
export class ActionsButtonComponent {
  
  constructor(private router: Router, private alertService: AlertService){}

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
      if(window.confirm("Do you want to open Cart?")){  
      this.router.navigate(['cart']);
      }
      this.alertService.success('Item added to your Cart Successfully!!',this.alertService.options);
    }
    wishlistButtonClicked() {
      this.newListWishlist.push(this.prodData);
      localStorage.setItem("addedToWishlistProducts",JSON.stringify(this.newListWishlist));
      if(window.confirm("Do you want to open Wishlist?")){       
      this.router.navigate(['wishlist']);}
      this.alertService.success('Item added to your Wishlist Successfully!!',this.alertService.options);
  }
}
