import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Product } from '../models/product.model';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reactive form validation - Product Name Validation check', () => {
    let prodName = component.reactiveForm.controls['name'];
    expect(prodName.valid).toBeFalsy();
    expect(prodName.errors['required']).toBeTruthy();
  });

  it('reactive form validation - Product Name Set Value check', () => {
    let prodName = component.reactiveForm.controls['name'];
    prodName.setValue('prodName')
    expect(prodName.valid).toBeTruthy();
    expect(prodName.value).toEqual('prodName');
    expect(prodName.errors).toBeNull();
  });

  it('reactive form validation - Product Description Validation check', () => {
    let prodDesc = component.reactiveForm.controls['description'];
    expect(prodDesc.valid).toBeFalsy();
    expect(prodDesc.errors['required']).toBeTruthy();
  });

  it('reactive form validation - Product Description Set Value check', () => {
    let prodDesc = component.reactiveForm.controls['description'];
    prodDesc.setValue('prodDesc')
    expect(prodDesc.valid).toBeTruthy();
    expect(prodDesc.value).toEqual('prodDesc');
    expect(prodDesc.errors).toBeNull();
  });

  it('reactive form validation - Product price Validation check', () => {
    let prodprice = component.reactiveForm.controls['price'];
    expect(prodprice.valid).toBeFalsy();
    expect(prodprice.errors['required']).toBeTruthy();
  });

  it('reactive form validation - Product price Set Value check', () => {
    let prodprice = component.reactiveForm.controls['price'];
    prodprice.setValue(12345)
    expect(prodprice.valid).toBeTruthy();
    expect(prodprice.value).toEqual(12345);
    expect(prodprice.errors).toBeNull();
  });

  it('reactive form validation - Product rating Validation check', () => {
    let prodrating = component.reactiveForm.controls['rating'];
    expect(prodrating.valid).toBeFalsy();
    expect(prodrating.errors['required']).toBeTruthy();
  });

  it('reactive form validation - Product rating Set Value check', () => {
    let prodrating = component.reactiveForm.controls['rating'];
    prodrating.setValue(5)
    expect(prodrating.valid).toBeTruthy();
    expect(prodrating.value).toEqual(5);
    expect(prodrating.errors).toBeNull();
  });

  it('reactive form validation - Product image Validation check', () => {
    let prodimage = component.reactiveForm.controls['image'];
    expect(prodimage.valid).toBeFalsy();
    expect(prodimage.errors['required']).toBeTruthy();
  });

  it('reactive form validation - form submitted check', () => {
    expect(component.reactiveForm.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css('button[type=submit]'));

    component.reactiveForm.controls['name'].setValue('name');
    component.reactiveForm.controls['description'].setValue('desc');
    component.reactiveForm.controls['price'].setValue(123);
    component.reactiveForm.controls['rating'].setValue(4);
    component.reactiveForm.controls['image'].setValue('');

    component.saveProduct();
    fixture.detectChanges();

    expect(component.newProd).toBeInstanceOf(Product);
  });
});
