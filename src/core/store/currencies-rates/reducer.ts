import { ICurrenciesRatesInfo } from '../../../shared/models/currencies-rates-info';
import { CurrenciesRatesActions, PRESERVE_CURRENCIES_RATES } from './actions';

export interface ICurrenciesRatesState {
    currenciesRatesInfo: ICurrenciesRatesInfo;
}

const initialState: ICurrenciesRatesState = {
    currenciesRatesInfo: {
        base: 'USD',
        date: null,
        rates: null
    }
};

export function currenciesRatesReducer(state: ICurrenciesRatesState = initialState, action: CurrenciesRatesActions)
    : ICurrenciesRatesState {
    switch (action.type) {
        case PRESERVE_CURRENCIES_RATES:
            return {
                ...state,
                currenciesRatesInfo: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
}
