import { Component, Input } from '@angular/core';
import { StoreProduct } from '../store';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {
  @Input({ required: true }) products: StoreProduct[] = [];
}
