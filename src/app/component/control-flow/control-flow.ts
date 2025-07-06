import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [CurrencyPipe],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss'
})
export class ControlFlow {
  productList = [
    { id: 1, name: 'Product 1', price: 100, qty: 10 },
    { id: 2, name: 'Product 2', price: 200, qty: 20 },
    { id: 3, name: 'Product 3', price: 300, qty: 30 },
    { id: 4, name: 'Product 4', price: 400, qty: 40 }
  ];
}
