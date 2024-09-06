import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-card-operation',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './card-operation.component.html',
  styleUrl: './card-operation.component.css'
})
export class CardOperationComponent {

  @Input() operation:any
  displayedColumns: string[] = ['id', 'origin', 'destination', 'type', 'value', 'status', 'date'];

}
