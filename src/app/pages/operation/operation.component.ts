import { Component } from '@angular/core';
import { CardOperationComponent } from '../../components/card-operation/card-operation.component';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [CardOperationComponent],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {

  operation: any

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.getOperation("2", "3").subscribe(data => {
      this.operation = data
    })
    
  }


}
