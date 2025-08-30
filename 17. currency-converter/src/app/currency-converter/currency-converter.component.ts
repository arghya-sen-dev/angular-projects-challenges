import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterService } from '../services/currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent {
  amount: number = 0;
  sourceCurrency: string = 'USD';
  targetCurrency: string = 'EUR';
  result: number = 0;
  conversionRate: number | null = null;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];
  currencyFlags: { [key: string]: string } = {
    USD: '🇺🇸',

    EUR: '🇪🇺',

    GBP: '🇬🇧',

    INR: '🇮🇳',

    JPY: '🇯🇵',
  };

  constructor(private currencyConverterService: CurrencyConverterService) {}

  convertCurrency() {
    this.conversionRate = this.currencyConverterService.getconversionRate(
      this.sourceCurrency,
      this.targetCurrency
    );
    if (this.conversionRate === null) {
      this.result = 0;
      return;
    }
    this.result = this.currencyConverterService.convertCurrency(
      this.amount,
      this.sourceCurrency,
      this.targetCurrency
    );
  }

  getFlagAndCurrency(currency: string): string {
    return `${this.currencyFlags[currency] || ''} ${currency}`;
  }
}
