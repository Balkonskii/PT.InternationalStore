import { CurrencyCode } from '../../shared/models/currency-code';

export interface IGoodsItem {
    id: string;
    name: string;
    priceBaseCurrency: CurrencyCode;
    price: number;
    imageLink: string;
    isSelected?: boolean;
}
