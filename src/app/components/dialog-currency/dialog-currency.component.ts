import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts'
import { CurrencyService } from '../../services/currency/currency.service';

@Component({
  selector: 'app-dialog-currency',
  standalone: true,
  providers: [  {provide: MAT_DATE_LOCALE, useValue: 'fr'}, provideNativeDateAdapter()],
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, NgxChartsModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatInputModule],
  templateUrl: './dialog-currency.component.html',
  styleUrl: './dialog-currency.component.css'
})
export class DialogCurrencyComponent implements OnInit {

  dateStart:any
  dateEnd:any
  option:any

  view: [number, number] = [750, 350];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  multi:any;
  name:string = ''
  amount:string = ''
  codigo:string = ''
  nombre: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private currecyService: CurrencyService) {}
  
  ngOnInit(): void {
    this.nombre = this.data?.item.nombre
    this.codigo = this.data?.item.codigo

    const hoy = new Date(Date.now());
    this.dateStart = hoy

    const futuro = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()-7)
    this.dateEnd = futuro

    this.option = 'week'

    let dateS = hoy.getFullYear()+"-"+(hoy.getMonth()+1 < 10 ? "0"+(hoy.getMonth()+1) : hoy.getMonth()+1)+"-"+hoy.getDate()
    let dateE = futuro.getFullYear()+"-"+(futuro.getMonth()+1 < 10 ? "0"+(futuro.getMonth()+1) : futuro.getMonth()+1)+"-"+futuro.getDate()
    this.getHistory(dateS, dateE)
  }

  filter() {
    const hoy = new Date(Date.now());
    if(this.option == 'week') {
      const futuro = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()-7)
      this.dateEnd = futuro
      let dateS = hoy.getFullYear()+"-"+(hoy.getMonth()+1 < 10 ? "0"+(hoy.getMonth()+1) : hoy.getMonth()+1)+"-"+hoy.getDate()
      let dateE = futuro.getFullYear()+"-"+(futuro.getMonth()+1 < 10 ? "0"+(futuro.getMonth()+1) : futuro.getMonth()+1)+"-"+futuro.getDate()
      this.getHistory(dateS, dateE)

    } else if(this.option == 'month') {
      const futuro = new Date(hoy.getFullYear(), hoy.getMonth()-1, hoy.getDate())
      this.dateEnd = futuro
      let dateS = hoy.getFullYear()+"-"+(hoy.getMonth()+1 < 10 ? "0"+(hoy.getMonth()+1) : hoy.getMonth()+1)+"-"+hoy.getDate()
      let dateE = futuro.getFullYear()+"-"+(futuro.getMonth()+1 < 10 ? "0"+(futuro.getMonth()+1) : futuro.getMonth()+1)+"-"+futuro.getDate()
      this.getHistory(dateS, dateE)

    } else if(this.option == 'year') {
      const futuro = new Date(hoy.getFullYear()-1, hoy.getMonth(), hoy.getDate())
      this.dateEnd = futuro
      let dateS = hoy.getFullYear()+"-"+(hoy.getMonth()+1 < 10 ? "0"+(hoy.getMonth()+1) : hoy.getMonth()+1)+"-"+hoy.getDate()
      let dateE = futuro.getFullYear()+"-"+(futuro.getMonth()+1 < 10 ? "0"+(futuro.getMonth()+1) : futuro.getMonth()+1)+"-"+futuro.getDate()
      this.getHistory(dateS, dateE)
    }
  }

  getHistory(dateS:string, dateE:string) {
    this.currecyService.getHistoryCurrency(this.codigo, dateE, dateS).subscribe((data) => {
      this.multi = data
    })
  }

}
