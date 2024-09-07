import { Component } from '@angular/core';
import { CardAccountComponent } from '../../components/card-account/card-account.component';
import { HomeService } from '../../services/home/home.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CardAccountComponent, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
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
