import { Component } from '@angular/core';
import { FeaturedProduct } from './featured-product/featured-product';
import { ProductGrid } from './product-grid/product-grid';
import { StoreHero } from './store-hero/store-hero';

export interface FeaturedStoreProduct {
  name: string;
  detail: string;
  quantity: string;
  oldPrice: number;
  price: number;
  image: string;
  description: string;
}

export interface StoreProduct {
  name: string;
  image: string;
}

@Component({
  selector: 'app-store',
  imports: [StoreHero, FeaturedProduct, ProductGrid],
  templateUrl: './store.html',
  styleUrl: './store.css'
})
export class Store {
  featuredProduct: FeaturedStoreProduct = {
    name: 'Taza grande',
    detail: '15 oz',
    quantity: '1 pz',
    oldPrice: 150,
    price: 100,
    image: '/producto1.png',
    description:
      'Nuestra taza personalizada te permite elegir el diseño que más te guste, desde tu personaje favorito, una frase inspiradora, una foto especial o un arte original.',
  };

  products: StoreProduct[] = [
    { name: 'Pozillo de peltre 11 oz', image: '/producto1.png' },
    { name: 'Taza cónica xl 17 oz', image: '/producto1.png' },
    { name: 'Taza mágica 11 oz', image: '/producto1.png' },
    { name: 'Vaso cónico plástico', image: '/producto1.png' },
    { name: 'Mason Jar', image: '/producto1.png' },
  ];
}
