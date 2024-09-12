import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home/home.service';
import { CardCurrencyComponent } from '../../components/card-currency/card-currency.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CardCurrencyComponent, MatInputModule, MatButtonModule, FormsModule, MatIconModule, MatTabsModule, MatProgressSpinnerModule, MatSelectModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent implements OnInit {

  currency: any
  name: string = ''
  option: string = ''

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getCurrency().subscribe((data) => {
      this.currency = data
    })
  }

  search() {
    this.homeService.getSearchCurrency(this.name).subscribe((data) => {
      this.currency = data
    })
  }

  order() {
    this.homeService.getOrderCurrency(this.option).subscribe((data) => {
      this.currency = data
    })
  }

}
