import {addManyCustomersAction} from "../store/customersReducer";

export const fetchCustomers = (dispatch: any) => (
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersAction(json)))
)
