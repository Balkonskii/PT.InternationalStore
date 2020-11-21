import { combineReducers } from 'redux';
import { goodsReducer } from '../../international-store/store/goods/reducer';
import { userReducer } from './user/reducer';
import { currenciesReducer } from './currency/reducer';

export const rootReducer = combineReducers({
    goodsState: goodsReducer,
    userState: userReducer,
    currenciesState: currenciesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
