import { CurrencyCode } from '../models/currency-code';
import { CurrenciesRates } from '../models/currencies-rates';

export class CurrencyValueHelper {
    static round(value: number): number {
        return Math.round(value * 100) / 100;
    }

    static convert(value: number, from: CurrencyCode, to: CurrencyCode, rates: CurrenciesRates): number {
        if (from === to) {
            return value;
        }

        const fromRate = rates[from];
        const toRate = rates[to];

        if (!fromRate || !toRate) {
            throw new Error(`Missing ${from} or ${to} in rates.`);
        }

        const result = value / fromRate * toRate;
        return this.round(result);
    }
}
