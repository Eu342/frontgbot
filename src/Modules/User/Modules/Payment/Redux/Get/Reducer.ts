import { TAsyncData } from 'Common/Redux/Models';
import { getInitialState } from 'Common/Helpers/Redux';
import { createReducer } from '@reduxjs/toolkit';
import { getCurrencyListAction } from './Actions';
import { EReduxStatus } from 'Common/Redux/Enums';
import { resetPaymentAction } from '../Actions';

/** Тип редакс-стейта типа валюты. */
export type TGetReduxState = TAsyncData<Nullable<string[]>>;

/** Начальное состояние. */
const INITIAL_STATE: TGetReduxState = getInitialState<Nullable<string[]>>(null);

/** Редьюсер списка валют. */
export const getReducer = createReducer<TGetReduxState>(INITIAL_STATE, (builder) => {
    builder
        // Получение списка сумм.
        .addCase(getCurrencyListAction.pending, (reducerState) => {
            reducerState.status = EReduxStatus.RUNNING;
            reducerState.data = null;
            reducerState.hasError = false;
        })
        .addCase(getCurrencyListAction.fulfilled, (reducerState, { payload }) => {
            reducerState.status = EReduxStatus.SUCCESS;
            reducerState.data = payload;
        })
        .addCase(getCurrencyListAction.rejected, (reducerState) => {
            reducerState.status = EReduxStatus.FAIL;
            reducerState.hasError = true;
        })

        // Сброс данных.
        .addCase(resetPaymentAction, () => INITIAL_STATE);
});