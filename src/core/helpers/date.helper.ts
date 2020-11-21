import { formatISO, parse, parseISO, format } from 'date-fns';

export class DateHelper {
    static parse(value: string, dateFormat: string, referenceDate?: Date | number): Date {
        return parse(value, dateFormat, referenceDate || new Date());
    }

    static parseDateTimeOffset(value: string): Date {
        if (!value) {
            return null;
        }

        return parseISO(value);
    }

    static formatDateTimeOffset(value: Date): string {
        if (!value) {
            return null;
        }

        return formatISO(value);
    }

    static parseDateTime(value: string): Date {
        if (!value) {
            return null;
        }

        return parseISO(value);
    }

    static getISODay(date: Date): number {
        if (!date) {
            return null;
        }

        const day = date.getDay();
        return day === 0 ? 7 : day;
    }

    static formatDateTime(date: Date): string {
        if (!date) {
            return null;
        }

        // tslint:disable-next-line:quotemark
        return format(date, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
    }

    static formatDate(date: Date, dateFormat: string = 'dd.MM.yyyy'): string {
        if (!date) {
            return null;
        }

        return format(date, dateFormat);
    }
}
