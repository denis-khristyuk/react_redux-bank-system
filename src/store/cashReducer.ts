import {cashAction} from "../types/actions";
import {cash} from "../types/cash";

const defaultState: cash = {
    cash: 0,
};

export const addCashAction = (payload: number): cashAction => {
    return {
        type: 'ADD',
        payload: payload,
    }
}

export const getCashAction = (payload: number): cashAction => {
    return {
        type: 'GET',
        payload: payload,
    }
};

export const cashReducer = (state: cash = defaultState, action: cashAction) => {
    switch (action.type) {
        case 'ADD':
            return {...state, cash: state.cash + action.payload};
        case 'GET':
            return {...state, cash: state.cash - action.payload};

        default:
            return state;
    }
};
