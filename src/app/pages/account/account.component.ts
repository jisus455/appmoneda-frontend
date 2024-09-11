import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CardAccountComponent } from '../../components/card-account/card-account.component';
import { DialogAccountComponent } from '../../components/dialog-account/dialog-account.component';
import { HomeService } from '../../services/home/home.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardOperationComponent } from '../../components/card-operation/card-operation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.homeService.getAccount("2").subscribe(data => {
      this.accounts = data
    })

    this.homeService.getCurrency().subscribe(data => {
      this.currencies = data
    })

    this.homeService.getOperation("11", "11").subscribe(data => {
      this.operations = data
    })
  }

  selectAccount(account: string) {
    this.homeService.getOperation(account, account).subscribe(data => {
      this.operations = data
      console.log(this.operations)
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
      this.homeService.getAccount("2").subscribe(data => {
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
      this.homeService.getAccount("2").subscribe(data => {
        this.accounts = data
      })
    })
  }

}
