import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  @Input() value: string = '';
}
