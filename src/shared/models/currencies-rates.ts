import { CurrencyCode } from './currency-code';

export type CurrenciesRates = {
    [P in CurrencyCode]?: number;
};
