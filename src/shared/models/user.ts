import { CurrencyCode } from './currency-code';

export interface IUser {
    selectedCurrency: CurrencyCode;
    allowedCurrencies: Array<CurrencyCode>;
}
