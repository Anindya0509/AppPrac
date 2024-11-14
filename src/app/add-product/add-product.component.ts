import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { AddProductService } from '../Service/add-product.service';
import { Product } from '../models/product.model';
import { AlertService } from '../Service/alert.service';

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

  constructor(private addProdService: AddProductService, private alertService: AlertService){
    this.addProdVal = this.addProdService.getCompOpen();
  }
  getId(): number{
    return this.newList.length + 1;
  }
  
  saveProduct(){
    console.log("calling save product")
    this.newProd.id = this.getId();
    this.newProd.name = this.reactiveForm.get('name').value;
    this.newProd.desc = this.reactiveForm.get('description').value;
    this.newProd.price = this.reactiveForm.get('price').value;
    this.newProd.rating = this.reactiveForm.get('rating').value;
    //this.newProd.productQuan = 1;
    this.newProd.prodImg = this.uploadFileString;
    //console.log(this.uploadFileString);
    this.newList.push(this.newProd);
    localStorage.setItem("AllProducts",JSON.stringify(this.newList));
    this.closePopUp();
    this.alertService.success('Added to Product List Successfully!!',this.alertService.options);
  }

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null,Validators.required),
      price: new FormControl(null,Validators.required),
      rating: new FormControl(null,[Validators.required,Validators.min(1),Validators.max(5)]),
      image: new FormControl(null,Validators.required)
    })
  } 

  closePopUp(){
    this.addProdService.setCompOpen(false);
    this.addProdVal = this.addProdService.getCompOpen();
    //console.log(this.addProdVal);
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
      //console.log(this.uploadFileString);
  }
}
