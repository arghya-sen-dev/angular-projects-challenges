import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.component.html',
  styleUrl: './guess-the-number.component.scss',
})
export class GuessTheNumberComponent {
  secretNumber = this.generateRandmNumber();
  attemptsLeft = 10;
  gussedNumber?: number;
  feedbackMessage = '';
  gameOver = false;

  private static readonly MAX_ATTEMPTS = 10;
  private static readonly MAX_NUMBER = 100;

  private generateRandmNumber(): number {
    return Math.floor(Math.random() * GuessTheNumberComponent.MAX_NUMBER) + 1;
  }

  public isValidGuess(guess?: number): boolean {
    return (
      guess != undefined &&
      guess >= 1 &&
      guess <= GuessTheNumberComponent.MAX_NUMBER
    );
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.gussedNumber)) {
      this.feedbackMessage =
        'Enter a number between 1 and ${GuessTheNumberComponent.MAX_NUMBER}.';
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }
  private evaluateGuess(): void {
    if (this.gussedNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedbackMessage =
        this.gussedNumber! > this.secretNumber
          ? 'Too High! Try Again'
          : 'Too Low! Try Again';
    }
  }
  private endGame(isWin: Boolean): void {
    this.gameOver = true;
    this.feedbackMessage = isWin
      ? `Congratulations! You've guessed the number ${this.secretNumber}!`
      : `Game Over! The correct number was ${this.secretNumber}.`;
  }

  resetGame(): void {
    this.secretNumber = this.generateRandmNumber();
    this.attemptsLeft = GuessTheNumberComponent.MAX_ATTEMPTS;
    this.gussedNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false;
  }
}
