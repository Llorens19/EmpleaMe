import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'shop', loadComponent: () => import('./shop/shop.component').then(m => m.ShopComponent) }
  ];
