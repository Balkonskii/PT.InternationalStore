import { CurrencyCode } from '../../shared/models/currency-code';

export interface IProduct {
    id: string;
    name: string;
    priceCurrency: CurrencyCode;
    price: number;
    imageLink: string;
}
