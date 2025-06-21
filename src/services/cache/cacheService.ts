import {LocalStorageCache} from "./LocalStorageCache.ts";

export interface ICacheService {
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: T, ttl?: number): Promise<void>;
    delete(key: string): Promise<void>;
    clear(): Promise<void>;
}
export class CacheService implements ICacheService {
    private  behaviour: ICacheService ;
    constructor(behaviour: ICacheService) {
        this.behaviour = behaviour;
    }
    async get<T>(key: string): Promise<T | null> {
        return this.behaviour.get<T>(key)

    }

    async set<T>(key: string, value: T, ttl?: number): Promise<void> {
        return this.behaviour.set<T>(key, value, ttl);
    }

    async delete(key: string): Promise<void> {
        return this.behaviour.delete(key);
    }

    async clear(): Promise<void> {
        return this.behaviour.clear();
    }
}
export const cacheService = new CacheService(new LocalStorageCache());