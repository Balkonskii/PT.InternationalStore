import { ICurrency } from '../../../shared/models/currency';
import { CurrenciesActions, PRESERVE_CURRENCIES } from './actions';

export interface ICurrencyState {
    currencies: Array<ICurrency>;
}

const initialState: ICurrencyState = {
    currencies: []
};

export function currenciesReducer(state: ICurrencyState = initialState, action: CurrenciesActions): ICurrencyState {
    switch (action.type) {
        case PRESERVE_CURRENCIES:
            return {
                ...state,
                currencies: [...action.payload]
            };
        default:
            return state;
    }
}
