import { ICurrenciesRatesResponseDto } from '../dto/currencies-rates-response-dto';
import { ServiceRequestHelper } from '../../core/helpers/service-request.helper';

export class CurrencyRatesApi {
    static readonly apiKey = 'd24c20d46ad343908d421235e1482928';

    static async loadRatesAsync(): Promise<ICurrenciesRatesResponseDto> {
        const url = `https://api.currencyfreaks.com/latest?apikey=${this.apiKey}`;
        const result = await ServiceRequestHelper.fetchJsonAsync<ICurrenciesRatesResponseDto>(url);
        return result;
    }
}
