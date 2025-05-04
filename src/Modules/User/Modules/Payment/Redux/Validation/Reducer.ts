import { createReducer } from '@reduxjs/toolkit';
import { validate } from './Actions';
import { resetPaymentAction } from '../Actions';
import { TError } from 'Common/Validation/Models';

/** Тип редакс-стейта ошибок валидации. */
export type TValidationReduxState = Partial<TError>

/** Начальное состояние. */
const INITIAL_STATE: TValidationReduxState = {};

/** Редьюсер ошибок валидации. */
export const paymentValidationReducer = createReducer<TValidationReduxState>(INITIAL_STATE, (builder) => {
    builder
        // Валидация поля.
        .addCase(validate.fulfilled, (_, { payload }) => {
            return payload;
        })

        // Сброс данных платежей.
        .addCase(resetPaymentAction, () => INITIAL_STATE);
});