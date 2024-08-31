import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  currency: any
  account: any
  operation: any
  client: any

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.getCurrency().subscribe(data => {
      this.currency = data
    })

    this.homeService.getAccount("2").subscribe(data => {
      this.account = data
    })

    this.homeService.getOperation("2", "3").subscribe(data => {
      this.operation = data
    })

    this.homeService.getClient().subscribe(data => {
      this.client = data
    })

  }
}
