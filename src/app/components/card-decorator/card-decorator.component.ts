import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-decorator',
  imports: [],
  templateUrl: './card-decorator.component.html',
  styleUrl: './card-decorator.component.css'
})
export class CardDecoratorComponent {
  @Input() cardClass: string = '';
}
