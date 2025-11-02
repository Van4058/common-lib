export enum StorageKey {
    TOKEN = "app_token",
    USER = "app_user",
    THEME = "app_theme",
    TABS = "app_tabs",
}

export class Storages {
    static saveItem<T>(key: string | StorageKey, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static removeItem(key: string | StorageKey) {
        localStorage.removeItem(key);
    }

    static getItem(key: string | StorageKey): any | null {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) ?? '') : null;
    }
}