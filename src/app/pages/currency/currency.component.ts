import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home/home.service';
import { CardCurrencyComponent } from '../../components/card-currency/card-currency.component';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CardCurrencyComponent],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent implements OnInit {
  
  currency:any

  constructor(private homeService:HomeService) {}
  
  ngOnInit(): void {
    this.homeService.getCurrency().subscribe(data => {
      this.currency = data
    })
  }

}
