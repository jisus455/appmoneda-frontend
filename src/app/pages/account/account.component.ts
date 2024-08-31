import { Component } from '@angular/core';
import { CardAccountComponent } from '../../components/card-account/card-account.component';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CardAccountComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  account: any

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.getAccount("2").subscribe(data => {
      this.account = data
    })

  }
  
}
