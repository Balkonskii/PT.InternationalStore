import { ICurrency } from '../../models/currency';

export const PRESERVE_CURRENCIES = 'PRESERVE_CURRENCIES';

interface IUpdateSelectedCurrency {
    type: typeof PRESERVE_CURRENCIES;
    payload: Array<ICurrency>;
}

export type CurrenciesActions = IUpdateSelectedCurrency;

export function preserveCurrencies(currencies: Array<ICurrency>): CurrenciesActions {
    return {
        type: PRESERVE_CURRENCIES,
        payload: currencies
    };
}
