import { Component, Input } from '@angular/core';
import { FeaturedStoreProduct } from '../store';

@Component({
  selector: 'app-featured-product',
  imports: [],
  templateUrl: './featured-product.html',
  styleUrl: './featured-product.css',
})
export class FeaturedProduct {
  @Input({ required: true }) product!: FeaturedStoreProduct;
}
