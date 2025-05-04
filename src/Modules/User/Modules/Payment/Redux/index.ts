import { TPaymentReduxState, paymentStateReducer } from './State/Reducer';
import { TCurrencyReduxState, currencyReducer } from './Currency/Reducer';
import { combineReducers } from '@reduxjs/toolkit';
import { amountReducer, TAmountReduxState } from './Amount/Reducer';
import { TGetReduxState, getReducer } from './Get/Reducer';
import { paymentValidationReducer, TValidationReduxState } from './Validation/Reducer';

/** Интерфейс редакс-стейта блока платежей. */
export interface IPaymentReduxState {
    /** Тип редакс-стейта редьюсера получения списка валют. */
    get: TGetReduxState;
    /** Тип редакс-стейта формы. */
    state: TPaymentReduxState;
    /** Интерфейс редакс-стейта интеграции типа валюты. */
    currency: TCurrencyReduxState;
    /** Тип редакс-стейта интеграции суммы. */
    amount: TAmountReduxState;
    /** Тип редакс-стейта ошибок валидации. */
    validation: TValidationReduxState
}

/** Редьюсер блока платежей. */
export const paymentReducer = combineReducers<IPaymentReduxState>({
    get: getReducer,
    state: paymentStateReducer,
    currency: currencyReducer,
    amount: amountReducer,
    validation: paymentValidationReducer
});