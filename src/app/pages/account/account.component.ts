import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CardAccountComponent } from '../../components/card-account/card-account.component';
import { DialogAccountComponent } from '../../components/dialog-account/dialog-account.component';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardOperationComponent } from '../../components/card-operation/card-operation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccountService } from '../../services/account/account.service';
import { CurrencyService } from '../../services/currency/currency.service';
import { OperationService } from '../../services/operation/operation.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CardAccountComponent, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressSpinnerModule, CardOperationComponent, MatExpansionModule, MatProgressBarModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  accounts: any
  currencies: any
  operations: any

  readonly dialog = inject(MatDialog)

  constructor(private accountService: AccountService,
              private currencyService: CurrencyService,
              private operationService: OperationService,
              private router: Router) { }

  ngOnInit(): void {
    this.accountService.getAccount("2").subscribe(data => {
      this.accounts = data
    })

    this.currencyService.getCurrency().subscribe(data => {
      this.currencies = data
    })

    this.operationService.getOperation("11", "11").subscribe(data => {
      this.operations = data
    })
  }

  selectAccount(account: string) {
    this.operationService.getOperation(account, account).subscribe(data => {
      this.operations = data
    })
  }

  createAccount() {
    this.dialog.open(DialogAccountComponent, {
      data: {
        clientId: 2,
        action: 'Create',
        currencies: this.currencies,
        balance: '0.00'
      }
    }).afterClosed().subscribe(() => {
      this.accountService.getAccount("2").subscribe(data => {
        this.accounts = data
      })
    })
  }

  deleteAccount() {
    this.dialog.open(DialogAccountComponent, {
      data: {
        clientId: 2,
        action: 'Delete',
        accounts: this.accounts,
        balance: '0.00'
      }
    }).afterClosed().subscribe(() => {
      this.accountService.getAccount("2").subscribe(data => {
        this.accounts = data
      })
    })
  }

}
