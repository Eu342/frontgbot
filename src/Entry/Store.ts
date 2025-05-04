import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ISettingsReduxState, settingsReducer } from 'Entry/Redux/Settings/Reducer';
import { IUserReduxState, userReducer } from 'Modules/User/Entry/Reducer';

/** Интерфейс редакс-стейта приложения. */
export interface IReduxState {
    /** Редьюсер глобальных параметров приложения. */
    settings: ISettingsReduxState;
    /** Редьюсер модуля пользователя. */
    user: IUserReduxState
};

/** Интерфейс серверной ошибки. */
export interface IServerError {
    /** Текст ошибки. */
    message: string;
}

/** Интерфейс конфигурации thunk'а. */
export interface IThunkApiConfig {
    /** Состояние редакса. */
    state: IReduxState;
    /** Диспатч. */
    dispatch: typeof store.dispatch;
    /** Значение, возвращаемое при ошибке. */
    rejectValue: IServerError;
}

/** Редьюсер приложения. */
const rootReducer = combineReducers<IReduxState>({
    settings: settingsReducer,
    user: userReducer,
});

/** Стор приложения. */
const store = configureStore({ reducer: rootReducer });

export default store;