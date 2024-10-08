import { Component, Inject, Input, OnInit } from '@angular/core';

import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-dialog-account',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatSelectModule, FormsModule, MatInputModule],
  templateUrl: './dialog-account.component.html',
  styleUrl: './dialog-account.component.css'
})
export class DialogAccountComponent implements OnInit {

  action:any
  balance:any

  accounts:any
  currencies:any

  clientId:any
  selectAccount:any

  result:any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private accountService: AccountService, private router:Router) {}
  
  ngOnInit(): void {
    this.action = this.data.action
    this.balance = this.data.balance

    this.accounts = this.data.accounts
    this.currencies = this.data.currencies

    this.clientId = this.data.clientId
  }

  pushButton() {
    if(this.action == 'Create') {
      let body = {
      'clienteId':this.clientId, 
      'tipoId':this.selectAccount.id
      }
      this.accountService.addAccount(body).subscribe((data: any) => {
        this.result = data
      })
    }

    if(this.action == 'Delete') {
      if(this.selectAccount.saldo != '0.00') {
        alert("La cuenta posee fondos")
      } else {
        this.accountService.deleteAccount(this.selectAccount.id).subscribe((data: any) => {
          this.result = data
        })
      }
    }
  }


}
