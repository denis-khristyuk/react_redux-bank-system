import {customersAction} from "../types/actions";
import {customer, customers} from "../types/customers";

const defaultState: customers = {
    customers: [],
};

export const addManyCustomersAction = (payload: customer[]): customersAction => {
    return {
        type: 'ADD_MANY_CUSTOMERS',
        payload: payload,
    }
}

export const addCustomerAction = (payload: string): customersAction => {
    return {
        type: 'ADD_CUSTOMER',
        payload: {name: payload, id: Date.now()}
    }
}

export const deleteCustomerAction = (payload: number): customersAction => {
    return {
        type: 'DELETE_CUSTOMER',
        payload: payload,
    }
}

export const customersReducer = (state: customers = defaultState, action: customersAction) => {
    switch (action.type) {
        case 'ADD_MANY_CUSTOMERS':
            // @ts-ignore
            return {...state, customers: [...state.customers, ...action.payload]}
        case 'ADD_CUSTOMER':
            return {...state, customers: [...state.customers, action.payload]};
        case 'DELETE_CUSTOMER':
            return {...state, customers:
                    state.customers.filter(customer => customer.id !== action.payload)
                };

        default:
            return state;
    }
};
