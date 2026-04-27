import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProduct } from './featured-product';

describe('FeaturedProduct', () => {
  let component: FeaturedProduct;
  let fixture: ComponentFixture<FeaturedProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProduct);
    fixture.componentRef.setInput('product', {
      name: 'Taza grande',
      detail: '15 oz',
      quantity: '1 pz',
      oldPrice: 150,
      price: 100,
      image: '/producto1.png',
      description: 'Producto destacado de prueba.',
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
