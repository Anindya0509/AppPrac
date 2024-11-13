import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceComponent } from './invoice.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('InvoiceComponent', () => {
  let component: InvoiceComponent;
  let fixture: ComponentFixture<InvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reactive form validation - Coupon Code Validation check', () => {
    let CouponName = component.reactiveForm.controls['coupon'];
    expect(CouponName.valid).toBeTruthy();
    expect(CouponName.errors?.['invalidCoupon']).toBeFalsy();
  });

  it('reactive form validation - Coupon code Set Value check', () => {
    let CouponName = component.reactiveForm.controls['coupon'];
    CouponName.setValue('15OFF')
    expect(CouponName.valid).toBeTruthy();
    expect(CouponName.value).toEqual('15OFF');
    expect(CouponName.errors).toBeNull();
  });
});
