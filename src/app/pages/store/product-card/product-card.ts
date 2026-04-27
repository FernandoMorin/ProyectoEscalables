import { Component, Input } from '@angular/core';
import { StoreProduct } from '../store';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) product!: StoreProduct;
}
