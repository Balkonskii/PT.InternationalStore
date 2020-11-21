import { IProduct } from '../../models/product';
import { CartActions } from './actions';

export interface ICartState {
    items: Array<IProduct>;
}

const initialState: ICartState = {
    items: [],
};

export function cartReducer(state: ICartState = initialState, action: CartActions): ICartState {
    switch (action.type) {
        case 'UPDATE_PRODUCT_IN_CART':
            return {
                ...state,
                items: [
                    ...updateCartItemsByProduct(state, action.payload)
                ]
            };
        default:
            return state;
    }
}

function updateCartItemsByProduct(state: ICartState, product: IProduct): Array<IProduct> {
    if (state.items.some(x => x.id === product.id)) {
        return state.items.filter(x => x.id !== product.id);
    } else {
        const items = [...state.items];
        items.push(product);
        return items;
    }
}
