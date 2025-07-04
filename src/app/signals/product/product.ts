import { Component, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { CartService } from '../../service/cart';
import { ProductInterface } from '../../../models/todo.model';

@Component({
  selector: 'app-product',
  imports: [],
  providers: [CartService],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  constructor(public cartService:CartService) {}
  @Input() products: ProductInterface[] = [];
  @Output() add = new EventEmitter<ProductInterface>()
}
