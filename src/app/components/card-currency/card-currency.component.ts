import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardImage, MatCardModule } from '@angular/material/card';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-currency',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatCardImage, MatButtonModule, MatIconModule],
  templateUrl: './card-currency.component.html',
  styleUrl: './card-currency.component.css'
})
export class CardCurrencyComponent {

  @Input() item:any
}
