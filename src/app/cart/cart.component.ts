import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../Service/invoice.service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { AlertService } from '../Service/alert.service';
import { BadgeCountService } from '../Service/badge-count.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private router: Router, private invoiceServ: InvoiceService, private alertService: AlertService,
    private badgeCountService: BadgeCountService
  ){}
  newListCart: Product[] = JSON.parse(localStorage.getItem("addedToCartProducts"));
  totalVal: number = 0;

  deleteFormCart(i:number){
    this.totalVal-= this.newListCart[i].price;
    this.newListCart.splice(i,1);
    localStorage.setItem("addedToCartProducts",JSON.stringify(this.newListCart));
    this.calculateTotalVal();
    this.badgeCountService.setCartBadgeCount(this.newListCart.length);
    this.alertService.success('Item has been deleted from cart Successfully!!',this.alertService.options);    
  }

  backToDash(){
    this.router.navigate(['dashboard']);
  }
  goToInvoice(){
    this.invoiceServ.totalPrice = this.totalVal;
    this.router.navigate(['invoice']);
  }

  addQuan(index){
    this.newListCart[index].productQuan++;
    localStorage.setItem("addedToCartProducts",JSON.stringify(this.newListCart));
    this.calculateTotalVal();
  }

  delQuan(index){
    if(this.newListCart[index].productQuan!== 1){
      this.newListCart[index].productQuan--;}
    localStorage.setItem("addedToCartProducts",JSON.stringify(this.newListCart));
    this.calculateTotalVal();
  }

  calculateTotalVal(){
    this.totalVal = 0;
    if(this.newListCart!=null || this.newListCart!=undefined){
      for(let i = 0; i<this.newListCart.length; i++){
        this.totalVal+= this.newListCart[i].price*this.newListCart[i].productQuan;
      }
    }
  }

  ngOnInit(){
    this.calculateTotalVal();
    this.badgeCountService.setCartBadgeCount(this.newListCart.length);
  }
}
