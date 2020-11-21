import { combineReducers } from 'redux';
import { goodsReducer } from '../../international-store/store/goods/reducer';

export const rootReducer = combineReducers({
    goodsState: goodsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
