import { Activity } from './activity.vm';
import { IBaseIdentifiable } from './base-identifiable.vm';
import { StateType } from './state.type';

export class Task implements IBaseIdentifiable {
    constructor(
        public Id: string, 
        public Name: string, 
        public Activities: Activity[],
        public TransactionId: string,
        public JobId: string,
        public State: StateType) {       
    }
}