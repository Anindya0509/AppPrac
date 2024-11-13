import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { Product } from '../models/product.model';
import { provideRouter, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { routes } from '../app.routes';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let testProduct: Product;
  let testProductList: Product[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

    testProduct = {id:1, name: 'Watch', desc: 'Great Designed Wearables', price: 12500.00, rating: 5, productQuan: 1,prodImg:''};
    testProductList =[
      {id:1, name: 'Watch', desc: 'Great Designed Wearables', price: 12500.00, rating: 5, productQuan: 1,prodImg:''},
      {id:2, name: 'Airpods', desc: 'Great Designed Wearables', price: 12500.00, rating: 5, productQuan: 2,prodImg:''}
    ];
    component.newListCart = testProductList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call calculate total Value function', () => {
    spyOn(component, 'calculateTotalVal');
    component.calculateTotalVal();
    expect(component.calculateTotalVal).toHaveBeenCalled();
  }); 
  
  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call delete Quantity', () => {
    spyOn(component, 'delQuan');
    component.delQuan(1);
    expect(component.delQuan).toHaveBeenCalled();
  });

  it('should delete item from cart', () => {
    component.deleteFormCart(component.newListCart[0].id - 1);
    expect(component.newListCart.length).toBe(1);
  }); 

  it('should calculate total value', () => {
    component.calculateTotalVal();
    expect(component.totalVal).toBe(37500);
  }); 

  it('should decrease product quantity', () => {
    component.delQuan(1);
    expect(component.newListCart[1].productQuan).toBe(1);
  }); 

  it('should increase product quantity', () => {
    component.addQuan(1);
    expect(component.newListCart[1].productQuan).toBe(3);
  }); 

});
