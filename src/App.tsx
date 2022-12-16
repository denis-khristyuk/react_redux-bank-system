import React from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import {addCustomerAction, deleteCustomerAction} from "./store/customersReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    // @ts-ignore
    const cash = useSelector(state => state.cashReducer.cash);
    // @ts-ignore
    const customers = useSelector(state => state.customersReducer.customers);
    const dispatch = useDispatch();

    const addCash = (cash: number) => {
        dispatch(addCashAction(cash));
    };

    const getCash = (cash: number) => {
        dispatch(getCashAction(cash));
    };

    const addCustomer = (name: string) => {
        dispatch(addCustomerAction(name));
    };

    const deleteCustomer = (id: number) => {
        dispatch(deleteCustomerAction(id));
    }

    return (
        <div className="App">
            <div className="cash">Cash: {cash}</div>
            <div className="buttons">
                <button onClick={() => addCash(Number(prompt('Введите сумму')))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt('Введите сумму')))}>Снять со счёта</button>
                <button onClick={() => {
                    // @ts-ignore
                    addCustomer(prompt('Введите имя'))
                }}
                >
                    Добавить пользователя
                </button>

                <button onClick={() => deleteCustomer(Number(prompt('Введите id пользователя')))}>Удалить пользователя</button>
                <button onClick={() => fetchCustomers(dispatch)}>Добавить несколько пользователей</button>
            </div>

            {customers.length > 0 ?
                <div>
                    {/*@ts-ignore*/}
                    {customers.map(customer =>
                        <div
                            className='customer'
                            onClick={() => deleteCustomer(customer.id)}
                        >
                            {customer.name}
                        </div>
                        )}
                </div>
                :
                <p>Клиентов нет!</p>}
        </div>
    );
}

export default App;
