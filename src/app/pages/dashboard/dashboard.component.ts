import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { CardCurrencyComponent } from "../../components/card-currency/card-currency.component";
import { CardAccountComponent } from '../../components/card-account/card-account.component';
import { CardOperationComponent } from '../../components/card-operation/card-operation.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccountService } from '../../services/account/account.service';
import { CurrencyService } from '../../services/currency/currency.service';
import { OperationService } from '../../services/operation/operation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardAccountComponent, 
    MatCardModule, 
    CardCurrencyComponent, 
    MatButtonModule, 
    MatAccordion, 
    MatExpansionModule, 
    MatIconModule, 
    CardOperationComponent, 
    MatTabsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currency:any
  account:any
  operation:any
  client:any

  constructor(private accountService: AccountService,
              private currencyService: CurrencyService,
              private operationService: OperationService,
              private router: Router) { }

  ngOnInit(): void {
    
    this.currencyService.getOrderCurrency("Popular").subscribe(data => {
      this.currency = data
    })

    this.accountService.getAccount("2").subscribe(data => {
      this.account = data
    })

    this.operationService.getLastOperation("11", "11", "5").subscribe(data => {
      this.operation = data
      console.log(data)
    })

  }
}
