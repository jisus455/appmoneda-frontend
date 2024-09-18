import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-currency',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './dialog-currency.component.html',
  styleUrl: './dialog-currency.component.css'
})
export class DialogCurrencyComponent implements OnInit {

  name:string = ''
  amount:string = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router:Router) {}
  
  ngOnInit(): void {
    this.name = this.data.nombre
  }

  pushButton() {
    localStorage.setItem('type', 'Buy')
    localStorage.setItem('destination', this.name)
    localStorage.setItem('amount', this.amount)
  }


}
