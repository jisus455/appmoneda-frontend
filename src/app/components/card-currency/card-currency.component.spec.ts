import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCurrencyComponent } from './card-currency.component';

describe('CardCurrencyComponent', () => {
  let component: CardCurrencyComponent;
  let fixture: ComponentFixture<CardCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCurrencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
