import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-operation',
  standalone: true,
  imports: [],
  templateUrl: './card-operation.component.html',
  styleUrl: './card-operation.component.css'
})
export class CardOperationComponent {

  @Input() item:any
}
