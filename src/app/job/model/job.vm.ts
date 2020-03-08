import { Task } from './task.vm';
import { IBaseIdentifiable } from './base-identifiable.vm';
import { StateType } from './state.type';

export class Job implements IBaseIdentifiable {
    constructor(
        public Id: string, 
        public Name: string, 
        public Tasks: Task[],
        public TransactionId: string,
        public State: StateType) {       
    }
}