import { TAsyncData } from 'Common/Redux/Models';
import { IBalanceInfo } from '../../Models';
import { getInitialState } from 'Common/Helpers/Redux';
import { createReducer } from '@reduxjs/toolkit';
import { resetBalanceAction } from '../Actions';
import { getUserDetails } from 'Modules/User/Modules/Balance/Redux/Get/Actions';
import { EReduxStatus } from 'Common/Redux/Enums';

/** Тип редакс-стейста данных модуля баланса. */
export type TBalanceGetReduxState = TAsyncData<Nullable<IBalanceInfo>>;

/** Начальное состояние. */
const INITIAL_STATE = getInitialState<Nullable<IBalanceInfo>>(null);

/** Редьюсер данных модуля баланса. */
export const balanceGetReducer = createReducer<TBalanceGetReduxState>(INITIAL_STATE, (builder) => {
    builder
        // Получение данных пользователя.
        .addCase(getUserDetails.pending, (reducerState) => {
            reducerState.status = EReduxStatus.RUNNING;
            reducerState.hasError = false;
            reducerState.data = null;
        })
        .addCase(getUserDetails.fulfilled, (reducerState, { payload }) => {
            reducerState.status = EReduxStatus.SUCCESS;
            reducerState.data = payload;
        })
        .addCase(getUserDetails.rejected, (reducerState) => {
            reducerState.status = EReduxStatus.FAIL;
            reducerState.hasError = true;
        })

        // Сброс данных модуля баланса.
        .addCase(resetBalanceAction, () => INITIAL_STATE);
});