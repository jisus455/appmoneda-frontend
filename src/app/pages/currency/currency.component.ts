import { Component, inject, OnInit } from '@angular/core';

import { CardCurrencyComponent } from '../../components/card-currency/card-currency.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { DialogCurrencyComponent } from '../../components/dialog-currency/dialog-currency.component';
import { CurrencyService } from '../../services/currency/currency.service';

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

  private readonly dialog = inject(MatDialog)

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrency().subscribe((data) => {
      this.currency = data
    })
  }

  search() {
    this.currencyService.getSearchCurrency(this.name).subscribe((data) => {
      this.currency = data
    })
  }

  order() {
    this.currencyService.getOrderCurrency(this.option).subscribe((data) => {
      this.currency = data
    })
  }

  open(item:any) {
    this.dialog.open(DialogCurrencyComponent, {
      minHeight: '550px',
      minWidth: '1100px',
      data: {item: item}
    })
  }

}
