import { Component } from '@angular/core';
import { CardOperationComponent } from '../../components/card-operation/card-operation.component';
import { HomeService } from '../../services/home/home.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormControlName, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CardAccountComponent } from "../../components/card-account/card-account.component";
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [
    CardOperationComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    CardAccountComponent,
    FormsModule,
    MatListModule
  ],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {

  operation: any
  account: any

  origin: any;
  destination: any;

  formType:any = new FormGroup({
    type: new FormControl('', Validators.required)
  });

  formAccount:any = new FormGroup({
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required)
  });

  formValue:any = new FormGroup({
    value: new FormControl('', Validators.required)
  });;

  isEditable: any;
  result:any
  resetActive:boolean = false

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getOperation("2", "3").subscribe(data => {
      this.operation = data
    })

    this.homeService.getAccount("2").subscribe(data => {
      this.account = data
    })
  }

  confirm() {
    const body = {
      'tipo': this.formType.get('type').value,
      'ctaOrg': this.formAccount.get('origin').value.id,
      'ctaDst': this.formAccount.get('destination').value.id,
      'valor': this.formValue.get('value').value
    }

    this.homeService.addOperation(body).subscribe((data) => {
      this.result = data
      document.getElementById('')
    })
  }


}
