import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatCardModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  connected:boolean = true
  widthSide:string = '75px'

  constructor(private router:Router) {}

  collapsed() {
    this.widthSide == '75px' ? this.widthSide = '280px' : this.widthSide = '75px'
  }

  disconnected() {
    this.connected = false
    this.router.navigateByUrl('login')
  }
}
