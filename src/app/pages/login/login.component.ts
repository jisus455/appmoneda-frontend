import { Component } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  client:Client = {
    email: '',
    password: ''
  }

  constructor() {}

  login() {
    console.log(this.client.email)
    console.log(this.client.password)
  }
}


interface Client {
  email:string,
  password:string,
}
