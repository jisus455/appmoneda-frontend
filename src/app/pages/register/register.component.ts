import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  client:Client = {
    user: '',
    email: '',
    password: '',
    country: ''
  }

  constructor() {}

  register() {
    console.log(this.client.user)
    console.log(this.client.email)
    console.log(this.client.password)
    console.log(this.client.country)
  }
}

interface Client {
  user:string,
  email:string,
  password:string,
  country:string
}
