import { TAsyncData } from 'Common/Redux/Models';
import { getInitialState } from 'Common/Helpers/Redux';
import { createReducer } from '@reduxjs/toolkit';
import { getAmountListAction } from './Actions';
import { EReduxStatus } from 'Common/Redux/Enums';
import { resetPaymentAction } from '../Actions';
import { IAmount } from 'Modules/User/Modules/Payment/Models';

/** Тип ответа запроса списка сумм. */
export type TCurrencyResponse = IAmount[]

/** Тип редакс-стейта типа валюты. */
export type TCurrencyReduxState = TAsyncData<Nullable<TCurrencyResponse>>;

/** Начальное состояние. */
const INITIAL_STATE: TCurrencyReduxState = getInitialState<Nullable<TCurrencyResponse>>(null);

/** Редьюсер типа валюты. */
export const currencyReducer = createReducer<TCurrencyReduxState>(INITIAL_STATE, (builder) => {
    builder
        // Получение списка сумм.
        .addCase(getAmountListAction.pending, (reducerState) => {
            reducerState.status = EReduxStatus.RUNNING;
            reducerState.data = null;
            reducerState.hasError = false;
        })
        .addCase(getAmountListAction.fulfilled, (reducerState, { payload }) => {
            reducerState.status = EReduxStatus.SUCCESS;
            reducerState.data = payload;
        })
        .addCase(getAmountListAction.rejected, (reducerState) => {
            reducerState.status = EReduxStatus.FAIL;
            reducerState.hasError = true;
        })

        // Сброс данных.
        .addCase(resetPaymentAction, () => INITIAL_STATE);
});