import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    {path: '',  redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: 'cart', component: CartComponent}
];
