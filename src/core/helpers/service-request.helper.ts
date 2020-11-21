export class ServiceRequestHelper {
    static async fetchJsonAsync<T>(input: RequestInfo, options?: RequestInit): Promise<T> {
        try {
            const response = await fetch(input, {
                ...this._defaultJsonRequestInit,
                ...options
            });
            const body = await response.json();
            return body as T;
        } catch (error) {
            if (error.name !== 'AbortError') {
                throw error;
            }
        }
    }

    private static get _defaultJsonRequestInit(): Partial<RequestInit> {
        return {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
            },
        };
    }
}
