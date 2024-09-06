import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { CardCurrencyComponent } from "../../components/card-currency/card-currency.component";
import { CardAccountComponent } from '../../components/card-account/card-account.component';

import { HomeService } from '../../services/home/home.service';
import { CardOperationComponent } from '../../components/card-operation/card-operation.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardAccountComponent, MatCardModule, CardCurrencyComponent, MatButtonModule, MatAccordion, MatExpansionModule, MatIconModule, CardOperationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currency:any
  account:any
  operation:any
  client:any

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    
    this.homeService.getCurrency().subscribe(data => {
      this.currency = data
      console.log(data)
    })

    this.homeService.getAccount("2").subscribe(data => {
      this.account = data
      console.log(data)
    })

    this.homeService.getOperation("2", "3").subscribe(data => {
      this.operation = data
      console.log(data)
    })

    this.homeService.getClient().subscribe(data => {
      this.client = data
      console.log(data)
    })

  }
}
