import { UniqueIdHelper } from '../../../core/helpers/unique-id.helper';
import { CurrencyValueHelper } from '../../../shared/helpers/currency-value.helper';
import { IProduct } from '../../models/product';

export interface IProductsState {
    items: Array<IProduct>;
}

const initialState: IProductsState = {
    items: Array.from({length: 24}).map(() => ({
        id: UniqueIdHelper.generateId(),
        imageLink: 'https://picsum.photos/200' + '?q=' + UniqueIdHelper.generateId(),
        name: 'ItemName' + Math.floor(Math.random() * 100),
        priceCurrency: 'USD',
        price: CurrencyValueHelper.round(((Math.random() * 1000) * 100) / 100)
    }))
};

export function productsReducer(state: IProductsState = initialState, action: any): IProductsState {
    switch (action.type) {
        default:
            return state;
    }
}
