import {Component, OnInit, ViewChild} from '@angular/core';

import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { HomeService } from '../../services/home/home.service';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatIcon, MatFormFieldModule, MatSelectModule, MatMenu, MatMenuTrigger, MatMenuItem, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  @ViewChild('snav') sidenav: MatSidenav | any;

  currency: any
  account: any
  operation: any
  client: any

  constructor(private homeService: HomeService, private router:Router) { }

  widthSide:string = '75px'

  collapsed() {
    this.widthSide == '75px' ? this.widthSide = '280px' : this.widthSide = '75px'
  }

  active:any
  ngOnInit(): void {
    this.active = this.router.url
    
    // this.homeService.getCurrency().subscribe(data => {
    //   this.currency = data
    // })

    // this.homeService.getAccount("2").subscribe(data => {
    //   this.account = data
    // })

    // this.homeService.getOperation("2", "3").subscribe(data => {
    //   this.operation = data
    // })

    // this.homeService.getClient().subscribe(data => {
    //   this.client = data
    // })

  }
}
