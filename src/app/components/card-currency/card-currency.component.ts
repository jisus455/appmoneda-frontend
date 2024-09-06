import { Component, Input } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-card-currency',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './card-currency.component.html',
  styleUrl: './card-currency.component.css'
})
export class CardCurrencyComponent {

  @Input() item:any
}
