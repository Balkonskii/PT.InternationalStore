import { IGoodsItem } from '../../models/goods-item';
import { UniqueIdHelper } from '../../../core/helpers/unique-id.helper';
import { GoodsActions, UPDATE_GOODS_ITEM } from './actions';

export interface IGoodsState {
    items: Array<IGoodsItem>;
}

const initialState: IGoodsState = {
    items: Array.from({length: 20}).map(() => ({
        id: UniqueIdHelper.generateId(),
        imageLink: 'https://picsum.photos/200' + '?q=' + UniqueIdHelper.generateId(),
        name: 'item1',
        price: 100
    }))
};

export function goodsReducer(state: IGoodsState = initialState, action: GoodsActions): IGoodsState {
    switch (action.type) {
        case UPDATE_GOODS_ITEM:
            return {
                ...state,
                items: state.items.map(x => x.id === action.payload.id ? action.payload : x)
            };
        default:
            return state;
    }
}
