import { IBaseIdentifiable } from './base-identifiable.vm';
import { StateType } from './state.type';

export class Activity implements IBaseIdentifiable {
    constructor(
        public Id: string, 
        public Name: string,
        public TransactionId: string,
        public TaskId: string,
        public State: StateType
        ) {}
}