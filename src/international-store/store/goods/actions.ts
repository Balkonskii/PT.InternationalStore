import { IGoodsItem } from '../../models/goods-item';

export const UPDATE_GOODS_ITEM = 'UPDATE_GOODS_ITEM';

interface IUpdateGoodsItem {
    type: typeof UPDATE_GOODS_ITEM;
    payload: IGoodsItem;
}

export type GoodsActions = IUpdateGoodsItem;

export function updateGoodsItem(item: IGoodsItem): GoodsActions {
    return {
        type: UPDATE_GOODS_ITEM,
        payload: item
    };
}
