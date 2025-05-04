import { createReducer } from '@reduxjs/toolkit';
import { setUserIdAction } from 'Entry/Redux/Settings/Actions';

/** Интерфейс редакс-стейта глобальных параметров приложения. */
export interface ISettingsReduxState {
    /** Идентификатор пользователя. */
    userId?: string;
}

/** Начальное состояние. */
const INITIAL_STATE: ISettingsReduxState = {};

/** Редьюсер глобальных параметров приложения. */
export const settingsReducer =  createReducer(INITIAL_STATE, (builder) => {
    builder
        // Установка идентификатора пользователя.
        .addCase(setUserIdAction, (reducerState, { payload }) => {
            reducerState.userId = payload;
        });
});