import { Component } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  newListCart: Product[] = JSON.parse(localStorage.getItem("addedToCartProducts"));
  totalVal: number = 0;  

  deleteFormCart(i:number){
    this.totalVal-= this.newListCart[i].price;
    this.newListCart.splice(i,1);
    localStorage.setItem("addedToCartProducts",JSON.stringify(this.newListCart));
  }

  ngOnInit(){
    if(this.newListCart!=null || this.newListCart!=undefined){
      for(let i = 0; i<this.newListCart.length; i++){
        this.totalVal+= this.newListCart[i].price;
      }
    }
  }
}
