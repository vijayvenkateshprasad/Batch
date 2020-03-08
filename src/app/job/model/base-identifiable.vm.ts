import { Task } from './task.vm';
import { StateType } from './state.type';

export interface IBaseIdentifiable {
    Id: string, 
    Name: string,
    TransactionId: string,
    State: StateType;
}