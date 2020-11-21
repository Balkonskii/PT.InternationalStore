import { IUser } from '../../models/user';
import { UPDATE_SELECTED_CURRENCY, UserActions } from './actions';

export interface IUserState {
    user: IUser;
}

const initialState: IUserState = {
    user: {
        selectedCurrency: 'RUB',
        allowedCurrencies: [
            'EUR',
            'GBP',
            'JPY',
            'RUB',
            'USD'
        ]
    }
};

export function userReducer(state: IUserState = initialState, action: UserActions): IUserState {
    switch (action.type) {
        case UPDATE_SELECTED_CURRENCY:
            return {
                ...state,
                user: {
                    ...state.user,
                    selectedCurrency: action.payload
                }
            };
        default:
            return state;
    }
}
