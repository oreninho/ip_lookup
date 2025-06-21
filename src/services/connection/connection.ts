
export interface IConnection<T>{
    get<U>(url: string, params?: T): Promise<U>;
    post<U>(url: string, data?: T): Promise<U>;
    put<U>(url: string, data?: T): Promise<U>;
}

export class Connection<T> implements IConnection<T> {
    private behavior: IConnection<T>
    constructor(behavior: IConnection<T>) {
        this.behavior = behavior;
    }
    async get<U>(url: string, params?: any): Promise<U> {
       return this.behavior.get<U>(url, params);
    }

    async post<U>(url: string, data?: any): Promise<U> {
        return this.behavior.post<U>(url, data);
    }

    async put<U>(url: string, data?: any): Promise<U> {
        return this.behavior.put<U>(url, data);
    }

}