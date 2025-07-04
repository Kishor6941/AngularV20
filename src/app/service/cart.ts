import { computed, effect, Injectable, signal } from '@angular/core';
import { ProductInterface } from '../../models/todo.model';

@Injectable()
export class CartService {
  items = signal<ProductInterface[]>([]);
  totalItems = computed(() => this.items().length);

  totalPrice = computed(() => {
    return this.items().reduce((acc, item) => acc + item.price * item.qty, 0);
  });
  constructor() {
    effect(() => {
      console.log('Cart items changed:', this.items());
      console.log('Total items:', this.totalItems());
      console.log('Total price:', this.totalPrice());
    });
  }

  addItems(item: ProductInterface) {
    this.items.update((items) => [...items, item]);
  }
  clearCart() {
    this.items.set([]);
  }
}
