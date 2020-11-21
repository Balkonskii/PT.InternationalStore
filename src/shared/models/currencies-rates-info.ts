import { CurrencyCode } from './currency-code';
import { CurrenciesRates } from './currencies-rates';

export interface ICurrenciesRatesInfo {
    date: Date;
    base: CurrencyCode;
    rates: CurrenciesRates;
}
