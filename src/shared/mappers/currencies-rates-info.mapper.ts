import { ICurrenciesRatesInfo } from '../models/currencies-rates-info';
import { ICurrenciesRatesResponseDto } from '../dto/currencies-rates-response-dto';
import { CurrenciesRates } from '../models/currencies-rates';
import { CurrencyCode } from '../models/currency-code';
import { DateHelper } from '../../core/helpers/date.helper';

export class CurrenciesRatesInfoMapper {
    static map(response: ICurrenciesRatesResponseDto): ICurrenciesRatesInfo {
        const keys = Object.keys(response.rates);
        const rates: CurrenciesRates = {};
        keys.forEach(key => {
            const code = key as CurrencyCode;
            rates[code] = parseFloat(response.rates[code]);
        });

        return {
            base: response.base,
            date: DateHelper.parseDateTime(response.date),
            rates: rates
        };
    }
}
