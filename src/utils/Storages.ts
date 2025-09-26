export enum StorageKey {
    TOKEN = "app_token",
    USER = "app_user",
    THEME = "app_theme",
}

export class Storages {
    static saveItem<T>(key: string | StorageKey, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static removeItem(key: string | StorageKey) {
        localStorage.removeItem(key);
    }

    static getItem(key: string | StorageKey): string | null {
        return localStorage.getItem(key);
    }
}