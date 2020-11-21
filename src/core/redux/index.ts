import { combineReducers } from 'redux';
import { productsReducer } from '../../international-store/redux/products/reducer';
import { userReducer } from '../../shared/redux/user/reducer';
import { currenciesReducer } from '../../shared/redux/currency/reducer';
import { currenciesRatesReducer } from '../../shared/redux/currencies-rates/reducer';
import { cartReducer } from '../../international-store/redux/cart/reducer';

export const rootReducer = combineReducers({
    productsState: productsReducer,
    userState: userReducer,
    currenciesState: currenciesReducer,
    currenciesRatesState: currenciesRatesReducer,
    cartState: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
