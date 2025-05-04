import { combineReducers } from '@reduxjs/toolkit';
import { connectingStateReducer, TConnectingReduxState } from './State/Reducer';

/** Интерфейс редакс-стейта модуля инструкции подключения. */
export interface IConnectingReduxState {
    /** Редакс-стейт данных формы инструкции подключения. */
    state: TConnectingReduxState
}

/** Редьюсер модуля инструкции подключения. */
export const connectingReducer = combineReducers<IConnectingReduxState>({
    state: connectingStateReducer
});