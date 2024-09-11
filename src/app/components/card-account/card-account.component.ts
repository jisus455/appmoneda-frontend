import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-account',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './card-account.component.html',
  styleUrl: './card-account.component.css'
})
export class CardAccountComponent {

  @Input() item:any
  @Output() newItemEvent = new EventEmitter<string>();

  selectItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
