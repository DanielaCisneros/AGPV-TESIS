import { Action } from '@ngrx/store';

export const sendVariable = '[modalidad] SendVariable';

export class SendVariable implements Action {
    readonly type = sendVariable;

    constructor( public payload: string ){}
}

export type actions = SendVariable;