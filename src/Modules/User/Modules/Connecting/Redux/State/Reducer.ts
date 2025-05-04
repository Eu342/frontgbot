import { IConnectingForm } from '../../Models';
import { createReducer } from '@reduxjs/toolkit';
import { changeAppAction, changeOSAction } from './Actions';
import { resetConnectingAction } from '../Actions';

/** Тип редакс-стейта данных формы инструкции подключения. */
export type TConnectingReduxState = Partial<IConnectingForm>

/** Начальное состояние. */
const INITIAL_STATE: TConnectingReduxState = {};

/** Редьюсер данных формы инструкции подключения. */
export const connectingStateReducer = createReducer<TConnectingReduxState>(INITIAL_STATE, (builder) => {
    builder
        // Изменение типа операционной системы.
        .addCase(changeOSAction, (reducerState, { payload }) => {
            reducerState.operationSystem = payload;
        })
        // Изменение типа приложения.
        .addCase(changeAppAction, (reducerState, { payload }) => {
            reducerState.app = payload;
        })

        // Сброс данных платежей.
        .addCase(resetConnectingAction, () => INITIAL_STATE);
});