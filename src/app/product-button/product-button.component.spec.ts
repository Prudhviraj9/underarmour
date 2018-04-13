import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductButtonComponent } from './product-button.component';

describe('ProductButtonComponent', () => {
  let component: ProductButtonComponent;
  let fixture: ComponentFixture<ProductButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
