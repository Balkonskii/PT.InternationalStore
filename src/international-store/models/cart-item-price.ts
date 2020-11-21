import { CurrencyCode } from '../../shared/models/currency-code';

export type CartItemPrice = {
    [P in CurrencyCode]?: number
};
