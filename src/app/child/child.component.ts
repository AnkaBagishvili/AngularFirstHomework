import { Component, Input, input } from '@angular/core';
import { Address } from '../person.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() address!: Address;
}
