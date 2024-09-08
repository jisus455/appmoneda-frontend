import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCurrencyComponent } from './dialog-currency.component';

describe('DialogCurrencyComponent', () => {
  let component: DialogCurrencyComponent;
  let fixture: ComponentFixture<DialogCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCurrencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
