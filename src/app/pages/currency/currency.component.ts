import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home/home.service';
import { CardCurrencyComponent } from '../../components/card-currency/card-currency.component';

import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CardCurrencyComponent, MatInputModule, MatButtonModule, FormsModule, MatIconModule, MatTabsModule, MatProgressSpinnerModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent implements OnInit {
  
  currency:any
  name:string = ''

  constructor(private homeService:HomeService) {}
  
  ngOnInit() {
    this.homeService.getCurrency().subscribe((data) => {
      this.currency = data
    })
  }

  search() {
    console.log(this.name)
    this.homeService.getSearchCurrency(this.name).subscribe((data) => {
      console.log(data)
      this.currency = data
    })
  }

}
