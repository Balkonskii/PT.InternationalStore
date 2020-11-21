import { CurrencyCode } from '../../models/currency-code';

export const UPDATE_SELECTED_CURRENCY = 'UPDATE_SELECTED_CURRENCY';

interface IUpdateSelectedCurrency {
    type: typeof UPDATE_SELECTED_CURRENCY;
    payload: CurrencyCode;
}

export type UserActions = IUpdateSelectedCurrency;

export function updateSelectedCurrency(currency: CurrencyCode): UserActions {
    return {
        type: UPDATE_SELECTED_CURRENCY,
        payload: currency
    };
}
