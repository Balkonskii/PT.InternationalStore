import { CurrencyCode } from '../models/currency-code';

type Rates = {
    [P in CurrencyCode]: string;
};

export interface ICurrenciesRatesResponseDto {
    date: string;
    base: CurrencyCode;
    rates: Rates;
}
