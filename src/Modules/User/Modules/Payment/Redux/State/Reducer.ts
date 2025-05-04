import { IPaymentForm } from '../../Models';
import { createReducer } from '@reduxjs/toolkit';
import { changeAmountAction, changeCurrencyTypeAction } from './Actions';
import { resetPaymentAction } from '../Actions';

/** Тип редакс-стейта данных формы платежей. */
export type TPaymentReduxState = Partial<IPaymentForm>

/** Начальное состояние. */
const INITIAL_STATE: TPaymentReduxState = {};

/** Редьюсер данных формы платежей. */
export const paymentStateReducer = createReducer<TPaymentReduxState>(INITIAL_STATE, (builder) => {
    builder
        // Изменение типа валюты.
        .addCase(changeCurrencyTypeAction, (reducerState, { payload }) => {
            reducerState.currency = payload;
        })
        // Изменение суммы платежа.
        .addCase(changeAmountAction, (reducerState, { payload }) => {
            reducerState.amount = payload;
        })
        

        // Сброс данных платежей.
        .addCase(resetPaymentAction, () => INITIAL_STATE);
});