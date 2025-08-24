import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter: number = 5;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  getCounterStatus(): string {
    return this.counter > 0
      ? 'Positive'
      : this.counter < 0
      ? 'Negative'
      : 'Zero';
  }
}
