import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
import { AddProductService } from '../Service/add-product.service';
import { Product } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  public addProdVal: boolean;
  public reactiveForm: FormGroup;
  newProd: Product = {id:0, name: '', desc: '', price: 0, rating: 0, productQuan: 1};
  newList: Product[] = JSON.parse(localStorage.getItem("AllProducts"));

  constructor(private addProdService: AddProductService){
    this.addProdVal = this.addProdService.getCompOpen();
  }
  
  saveProduct(){
    
    this.newProd.id = this.reactiveForm.get('id').value;
    this.newProd.name = this.reactiveForm.get('name').value;
    this.newProd.desc = this.reactiveForm.get('description').value;
    this.newProd.price = this.reactiveForm.get('price').value;
    this.newProd.rating = this.reactiveForm.get('rating').value;
    this.newProd.productQuan = 1;
    console.log(this.newProd);
    this.newList.push(this.newProd);
    localStorage.setItem("AllProducts",JSON.stringify(this.newList));
    this.closePopUp();
  }

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      rating: new FormControl(null)
    })
  } 

  closePopUp(){
    this.addProdService.setCompOpen(false);
    this.addProdVal = this.addProdService.getCompOpen();
    console.log(this.addProdVal);
  }
}
