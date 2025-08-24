import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss',
})
export class StopwatchComponent {
  elaspsedTime = 0;
  isRunning = false;
  intervalRef: any;

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }
  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elaspsedTime += 0.1;
    }, 100);
    console.log('stopwatch started');
  }
  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('stopwatch stopped');
  }
  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elaspsedTime = 0;
    console.log('stopwatch reseted');
  }
}
