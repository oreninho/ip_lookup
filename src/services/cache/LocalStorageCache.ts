import {ICacheService} from "./cacheService.ts";

export class LocalStorageCache implements ICacheService
{
   async get<T>(key: string): Promise<T | null> {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    async set<T>(key: string, value: T): Promise<void> {
        localStorage.setItem(key, JSON.stringify(value));
    }

    async delete(key: string): Promise<void> {
        localStorage.removeItem(key);
    }

    async clear(): Promise<void> {
        localStorage.clear();
    }

}