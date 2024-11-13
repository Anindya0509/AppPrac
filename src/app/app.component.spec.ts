import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, Router, RouterLink } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { By } from '@angular/platform-browser';
import { RouterTestingHarness } from '@angular/router/testing';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

describe('AppComponent', () => {
  let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {    
    expect(app).toBeTruthy();
  });

  it(`should have the 'ALIMAMA' title`, () => {
    expect(app.title).toEqual('ALIMAMA');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('ALIMAMA');
  });
});

describe('App Component Routing to Dashboard', () => {
  let component: DashboardComponent;
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
    component = await harness.navigateByUrl('/dashboard', DashboardComponent);
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
    expect(TestBed.inject(Router).url).toBe('/dashboard');
  }));  
});

describe('App Component Routing to Cart', () => {
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

describe('App Component Routing to Wishlist', () => {
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