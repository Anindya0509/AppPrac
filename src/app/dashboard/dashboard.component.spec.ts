import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AddProductService } from '../Service/add-product.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CartComponent } from '../cart/cart.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent,AgGridAngular],
      providers: [AddProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Dashboard Component Routing to Cart', () => {
  let component: CartComponent;
  // let fixture: ComponentFixture<ProductsComponent>;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        provideRouter([
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'cart',
            component: CartComponent,
          },
          {
            path: 'wishlist',
            component: WishlistComponent,
          }
        ]),
      ],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/cart', CartComponent);
  });

  it('should navigate to cart page', fakeAsync(() => {
    // Arrange (query the DOM for the first routerLink element)
    const linkItems = harness.routeDebugElement?.queryAll(
      By.directive(RouterLink)
    );

    // Act (click the first routerLink element)
    linkItems![0]?.triggerEventHandler('click', {
      button: 0,
    });

    tick();

    // Assert (check the URL)
    expect(TestBed.inject(Router).url).toBe('/cart');
  }));  
});

describe('Dashboard Component Routing to Wishlist', () => {
  let component: WishlistComponent;
  // let fixture: ComponentFixture<ProductsComponent>;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        provideRouter([
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'cart',
            component: CartComponent,
          },
          {
            path: 'wishlist',
            component: WishlistComponent,
          }
        ]),
      ],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/wishlist', WishlistComponent);
  });

  it('should navigate to wishlist page', fakeAsync(() => {
    // Arrange (query the DOM for the first routerLink element)
    const linkItems = harness.routeDebugElement?.queryAll(
      By.directive(RouterLink)
    );

    // Act (click the first routerLink element)
    linkItems![0]?.triggerEventHandler('click', {
      button: 0,
    });

    tick();

    // Assert (check the URL)
    expect(TestBed.inject(Router).url).toBe('/wishlist');
  }));  
});
