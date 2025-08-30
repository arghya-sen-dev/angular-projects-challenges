import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  private conversionRates: { [key: string]: { [key: string]: number } } = {
    USD: { EUR: 0.96, GBP: 0.75, INR: 74.5, JPY: 109 },

    EUR: { USD: 1.04, GBP: 0.88, INR: 77, JPY: 113 },

    GBP: { USD: 1.33, EUR: 1.14, INR: 100, JPY: 150 },

    INR: { USD: 0.013, EUR: 0.011, GBP: 0.01, JPY: 1.5 },

    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0067, INR: 0.67 },
  };
  getconversionRate(source: string, target: string): number | null {
    if (!this.conversionRates[source]) return null;
    if (!this.conversionRates[source][target]) return null;
    return this.conversionRates[source][target];
  }
  convertCurrency(amount: number, source: string, target: string): number {
    const rate = this.getconversionRate(source, target);
    if (rate === null) return 0;
    return amount * rate;
  }
}
