import { ICurrenciesRatesInfo } from '../../models/currencies-rates-info';

export const PRESERVE_CURRENCIES_RATES = 'PRESERVE_CURRENCIES_RATES';

interface IPreserveCurrenciesRates {
    type: typeof PRESERVE_CURRENCIES_RATES;
    payload: ICurrenciesRatesInfo;
}

export type CurrenciesRatesActions = IPreserveCurrenciesRates;

export function preserveCurrenciesRates(currenciesRatesInfo: ICurrenciesRatesInfo): CurrenciesRatesActions {
    return {
        type: PRESERVE_CURRENCIES_RATES,
        payload: currenciesRatesInfo
    };
}
