import { CartItemPrice } from './cart-item-price';

export interface ICartItem {
    id: string;
    name: string;
    price: CartItemPrice;
}
