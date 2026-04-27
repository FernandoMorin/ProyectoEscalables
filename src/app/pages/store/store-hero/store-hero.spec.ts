import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHero } from './store-hero';

describe('StoreHero', () => {
  let component: StoreHero;
  let fixture: ComponentFixture<StoreHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
