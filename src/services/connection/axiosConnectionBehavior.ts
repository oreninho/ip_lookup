import axios from 'axios';
import { IConnection } from './connection.ts';
export class AxiosConnectionBehavior<T> implements IConnection<T>{

    async get<U>(url: string, params?: T): Promise<U> {
        const response = await axios.get<U>(url, { params });
        if (response.status !== 200) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        return response.data;
    }

    async post<U>(url: string, data?: T): Promise<U> {
        const response = await axios.post<U>(url, data);
        if (response.status !== 200) {
            throw new Error(`Error posting data: ${response.statusText}`);
        }
        return response.data;
    }

    async put<U>(url: string, data?: T): Promise<U> {
        const response = await axios.put<U>(url, data);
        if (response.status !== 200) {
            throw new Error(`Error updating data: ${response.statusText}`);
        }
        return response.data;
    }
}