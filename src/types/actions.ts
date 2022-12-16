import {customer} from "./customers";

export type cashAction = {
    type: 'ADD' | 'GET'
    payload: number;
}

export type customersAction = {
    type: 'ADD_CUSTOMER' | 'DELETE_CUSTOMER' | 'ADD_MANY_CUSTOMERS';
    payload: customer | number | customer[];
}
