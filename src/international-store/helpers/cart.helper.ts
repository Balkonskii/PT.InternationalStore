import { IProduct } from '../models/product';
import { IUser } from '../../shared/models/user';
import { CurrenciesRates } from '../../shared/models/currencies-rates';
import { CartItemPrice } from '../models/cart-item-price';
import { CurrencyValueHelper } from '../../shared/helpers/currency-value.helper';
import { ICartItem } from '../models/cart-item';
import { CartAmount } from '../models/cart-amount';

export class CartHelper {
    static calculateCartItemPrice(product: IProduct, user: IUser, rate: CurrenciesRates): CartItemPrice {
        const result: CartItemPrice = {};
        if (rate) {
            user.allowedCurrencies.forEach(allowedCurrency => {
                const price = CurrencyValueHelper.convert(product.price, product.priceCurrency, allowedCurrency, rate);
                result[allowedCurrency] = price;
            });
        }

        return result;
    }

    static calculateCartAmount(items: Array<ICartItem>, user: IUser): CartAmount {
        const result: CartAmount = {};
        user.allowedCurrencies.forEach(allowedCurrency => {
            const amount = items
                .map(x => x.price[allowedCurrency])
                .reduce((a, b) => a + b, 0);

            result[allowedCurrency] = CurrencyValueHelper.round(amount);
        });
        return result;
    }
}
