import { Component,inject, signal } from '@angular/core';
import { Product } from '../product/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart';
import { ProductInterface } from '../../../models/todo.model';

@Component({
  selector: 'app-cart',
  imports: [Product, CommonModule],
  providers: [CartService],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart{
  private cart = inject(CartService);
    items = this.cart.items;
    totalItems = this.cart.totalItems;
    totalPrice = this.cart.totalPrice;
 productList = signal([
    { name: 'Apple', price: 100, qty: 1 },
    { name: 'Banana', price: 40, qty: 1 },
    { name: 'Mango', price: 80, qty: 1 },
  ]);

   addToCart(item: ProductInterface) {
    this.cart.addItems(item);
  }

  clear() {
    this.cart.clearCart();
  }
}
