import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
import { AddProductService } from '../Service/add-product.service';
import { Product } from '../models/product.model';

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
  newProd: Product = new Product();
  newList: Product[] = JSON.parse(localStorage.getItem("AllProducts"));
  imageSrc;
  uploadFile: any;
  //base64s
  uploadFileString: string;

  constructor(private addProdService: AddProductService){
    this.addProdVal = this.addProdService.getCompOpen();
  }
  
  saveProduct(){
    
    this.newProd.id = this.reactiveForm.get('id').value;
    this.newProd.name = this.reactiveForm.get('name').value;
    this.newProd.desc = this.reactiveForm.get('description').value;
    this.newProd.price = this.reactiveForm.get('price').value;
    this.newProd.rating = this.reactiveForm.get('rating').value;
    //this.newProd.productQuan = 1;
    this.newProd.prodImg = this.uploadFileString;
    console.log(this.uploadFileString);
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
      rating: new FormControl(null),
      image: new FormControl(null)
    })
  } 

  closePopUp(){
    this.addProdService.setCompOpen(false);
    this.addProdVal = this.addProdService.getCompOpen();
    console.log(this.addProdVal);
  }

  // uploadImage(): string {
  //   return this.uploadFileString;
  // }

  uploadImageChange(event){
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
        this.uploadFile = file;
        this.handleInputChange(file); //turn into base64      
    }
    else {
      alert("No file selected");
    }
  }

  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
_handleReaderLoaded(e) {
  let reader = e.target;
  var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
  //this.imageSrc = base64result;
      this.uploadFileString = base64result;
      console.log(this.uploadFileString);
  }
}
