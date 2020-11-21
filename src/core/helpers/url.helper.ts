import { stringify, parse, ParsedQuery } from 'query-string';

export class UrlHelper {
    static stringifyQueryParams(value: any): string {
        const queryParams = value && Object.keys(value).length ? '?' + stringify(value, {
            skipNull: true,
            skipEmptyString: true
        }) : '';

        return queryParams;
    }

    static setQueryParams(value: any): void {
        const queryParams = UrlHelper.stringifyQueryParams(value);
        window.history.replaceState(null, document.title, window.location.pathname + queryParams);
    }

    static getQueryParams(): ParsedQuery {
        try {
            const params = window.location.search.replace('?', '');
            return params ? parse(params) : null;
        } catch (e) {
            console.warn('Error when parsing route query string');
            console.error(e);
            return null;
        }
    }
}
