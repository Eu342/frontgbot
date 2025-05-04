import { TAsyncData } from 'Common/Redux/Models';
import { getInitialState } from 'Common/Helpers/Redux';
import { IPaymentForm } from '../../Models';
import { createReducer } from '@reduxjs/toolkit';
import { getPaymentLink } from './Actions';
import { EReduxStatus } from 'Common/Redux/Enums';
import { resetPaymentAction } from '../Actions';

/** Интерфейс запроса ссылки на сервис пополнения баланса. */
export interface IAmountRequest extends Pick<IPaymentForm, 'amount' | 'currency'> {
    /** Идентификатор пользователя. */
    user_id: number;
}

/** Тип редакс-стейта суммы. */
export type TAmountReduxState = TAsyncData<Nullable<string>>;

/** Начальное состояние. */
const INITIAL_STATE: TAmountReduxState = getInitialState<Nullable<string>>(null);

/** Редьюсер суммы. */
export const amountReducer = createReducer<TAmountReduxState>(INITIAL_STATE, (builder) => {
    builder
        // Получение ссылки на оплату.
        .addCase(getPaymentLink.pending, (reducerState) => {
            reducerState.status = EReduxStatus.RUNNING;
            reducerState.data = null;
            reducerState.hasError = false;
        })
        .addCase(getPaymentLink.fulfilled, (reducerState, { payload }) => {
            reducerState.status = EReduxStatus.SUCCESS;
            reducerState.data = payload;
        })
        .addCase(getPaymentLink.rejected, (reducerState) => {
            reducerState.status = EReduxStatus.FAIL;
            reducerState.hasError = true;
        })

        // Сброс данных.
        .addCase(resetPaymentAction, () => INITIAL_STATE);
});