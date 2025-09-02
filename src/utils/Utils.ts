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
        return dayjs(date).add(amount, 'day');
    }

    static subtractDays(date: dayjs.ConfigType, amount: number) {
        return dayjs(date).subtract(amount, 'day');
    }
}

export const TextUtils = {
    capitalize: (text: string) => {
        if (!text || text.length === 0) {
            return "";
        }

        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    },

    capitalizeWords: (text: string) => {
        if (!text || text.length === 0) {
            return "";
        }

        return text.toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
    },

    truncate: (text: string, limit: number = 10, suffix: string = "...") => {
        if (!text || text.length === 0) {
            return ""
        }

        return text.length <= limit ? text : text.slice(0, limit).trim() + suffix
    },

    trim: (text: string) => {
        if (!text || text.length === 0) {
            return ""
        }

        return text.replace(/\s+/g, " ").trim()
    },

    reverse: (text: string) => {
        if (!text || text.length === 0) {
            return ""
        }

        return text.split("").reverse().join("")
    },

    camelToSnake: (text: string) => {
        if (!text || text.length === 0) {
            return "";
        }

        return text.replace(/([A-Z])/g, "_$1").toLowerCase()
    },

    snakeToCamel: (text: string) => {
        if (!text || text.length === 0) {
            return "";
        }

        return text.replace(/(_\w)/g, m => m[1].toUpperCase())
    },

    camelToKebab: (text: string) => {
        if (!text || text.length === 0) {
            return "";
        }

        return text.replace(/([A-Z])/g, "-$1").toLowerCase()
    },

    kebabToCamel: (text: string) => {
        if (!text || text.length === 0) {
            return "";
        }

        return text.replace(/(-\w)/g, m => m[1].toUpperCase())
    },

    toPascalCase: (text: string) => {
        return text
            .replace(/[_\- ]+/g, " ")
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join("")
    },

    isEmail: (email: string) => {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
        return regex.test(email);
    },

    isPhoneNumber: (phone: string) => {
        const regex = /(84|0[3|5|7|8|9])+([0-9]{3,18})\b/
        return regex.test(phone);
    },

    isUrl: (url: string) => {
        // eslint-disable-next-line no-useless-escape
        const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
        return regex.test(url);
    },

    isEmpty: (text: string) => {
        return text.trim().length === 0;
    }
}

export const DateUtils = {
    
}