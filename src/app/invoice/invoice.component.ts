import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceService } from '../Service/invoice.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

  public reactiveForm: FormGroup;
  public totalPrice: number;
  public showDiscount:boolean = false;
  public discount: number = 0;
  constructor(private router: Router, private invoiceServ: InvoiceService){
    this.totalPrice = this.invoiceServ.totalPrice;
  }  

  backToDash(){
    this.router.navigate(['dashboard']);
  }
  backToCart(){
    this.router.navigate(['cart']);
  }

  checkOut(){
    window.alert("your order is successful");
    this.router.navigate(['dashboard']);
  }

  addCoupon(){
    if(this.reactiveForm.get('coupon').value === "15OFF"){
      this.discount = this.totalPrice*0.15;
      this.showDiscount = true;
    }
  }

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      coupon: new FormControl(null)});
  }

}
