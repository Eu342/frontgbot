import { IPaymentReduxState, paymentReducer } from 'Modules/User/Modules/Payment/Redux';
import { combineReducers } from '@reduxjs/toolkit';
import { balanceReducer, IBalanceReduxState } from 'Modules/User/Modules/Balance/Redux';
import { connectingReducer, IConnectingReduxState } from '../Modules/Connecting/Redux';

/** Интерфейс редакс-стейта модуля пользователя. */
export interface IUserReduxState {
    /** Модуль платежа. */
    payment: IPaymentReduxState;
    /** Модуль баланса. */
    balance: IBalanceReduxState;
    /** Модуль инструкции подключения. */
    connecting: IConnectingReduxState;
}

/** Редьюсер модуля пользователя. */
export const userReducer = combineReducers<IUserReduxState>({
    payment: paymentReducer,
    balance: balanceReducer,
    connecting: connectingReducer,
});