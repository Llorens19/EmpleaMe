import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component')
            .then(c => c.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component')
            .then(c => c.HomeComponent)
    },
    {
        path: 'shop',
        loadComponent: () => import('./shop/shop.component')
            .then(c => c.ShopComponent)
    },
    {
        path: 'shop/categories/:slug',
        loadComponent: () => import('./shop/shop.component')
            .then(c => c.ShopComponent)
    },


];