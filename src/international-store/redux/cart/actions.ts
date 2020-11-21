import { IProduct } from '../../models/product';

export const UPDATE_PRODUCT_IN_CART = 'UPDATE_PRODUCT_IN_CART';

interface IUpdateProductInCart {
    type: typeof UPDATE_PRODUCT_IN_CART;
    payload: IProduct;
}

export type CartActions = IUpdateProductInCart;

export function updateProductInCart(product: IProduct): CartActions {
    return {
        type: UPDATE_PRODUCT_IN_CART,
        payload: product
    };
}
