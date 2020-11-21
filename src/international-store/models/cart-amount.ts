import { CurrencyCode } from '../../shared/models/currency-code';

export type CartAmount = {
    [P in CurrencyCode]: number;
};
