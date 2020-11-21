import { combineReducers } from 'redux';
import { goodsReducer } from '../../international-store/store/goods/reducer';
import { userReducer } from '../../shared/store/user/reducer';
import { currenciesReducer } from '../../shared/store/currency/reducer';
import { currenciesRatesReducer } from '../../shared/store/currencies-rates/reducer';

export const rootReducer = combineReducers({
    goodsState: goodsReducer,
    userState: userReducer,
    currenciesState: currenciesReducer,
    currenciesRates: currenciesRatesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
