import { Routes } from '@angular/router';
import { canMatchFun } from './guards/can-match.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./component/home/home').then((m) => m.Home),
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./component/todo-form/todo-form').then((m) => m.TodoForm),
  },
  {
    path: 'signal',
    loadComponent: () => import('./signals/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'deferrable-view',
    loadComponent: () =>
      import('./component/deferrable-view/deferrable-view').then(
        (m) => m.DeferrableView
      ),
  },
  {
    path: 'control-flow',
    loadComponent: () =>
      import('./component/control-flow/control-flow').then(
        (m) => m.ControlFlow
      ),
  },
  {
    path: 'typed-forms',
    canMatch : [canMatchFun],
    loadComponent: () =>
      import('./component/typed-form/typed-form').then((m) => m.TypedForm),
  },
  {
    path : "**",
    loadComponent: () => import('./page-not-found/page-not-found').then((m) => m.PageNotFound)
  }
];
