import { Connection } from './connection.ts';
import { AxiosConnectionBehavior } from './axiosConnectionBehavior';

export const httpConnection = new Connection(new AxiosConnectionBehavior());
