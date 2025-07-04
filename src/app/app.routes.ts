import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./component/home/home').then(m => m.Home)
    },
  {
    path: 'todo',
    loadComponent:() => import('./component/todo-form/todo-form').then(m => m.TodoForm)
  },
  {
    path : 'signal',
    loadComponent: () => import('./signals/cart/cart').then(m => m.Cart)
  }  
];
