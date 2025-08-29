import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

// extend plugin
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export class Utils {
    static formatByte(num: number, precision: number = 1) {
        let i = 0;
        const suffix = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        while ((num / 1024) > 1) {
            num = num / 1024;
            i++;
        }

        return num.toFixed(precision) + suffix[i];
    }


    /**
     *
     * Handle date
     * - get datejs
     * - get string from date
     * - manipulate
     * - display
     * - humanization
     */
    static formatDate(date: dayjs.ConfigType, input: string = 'DD-MM-YYYY', format: string = 'YYYY-MM-DD HH:mm:ss') {
        return dayjs(date, input).format(format);
    }

    static formatToDate(date: dayjs.ConfigType, format: string = 'YYYY-MM-DD HH:mm:ss') {
        return dayjs(date, format);
    }

    static addDays(date: dayjs.ConfigType, amount: number) {
        return dayjs(date).add(amount,  'day');
    }

    static subtractDays(date: dayjs.ConfigType, amount: number) {
        return dayjs(date).subtract(amount,  'day');
    }
}