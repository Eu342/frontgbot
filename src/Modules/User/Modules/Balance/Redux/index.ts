import { combineReducers } from '@reduxjs/toolkit';
import { balanceGetReducer, TBalanceGetReduxState } from './Get/Reducer';

/** Интерфейс редакс-стейта модуля баланса. */
export interface IBalanceReduxState {
    /** Редакс-стейт данных модуля баланса. */
    get: TBalanceGetReduxState
}

/** Редьюсер модуля баланса. */
export const balanceReducer = combineReducers<IBalanceReduxState>({
    get: balanceGetReducer
});