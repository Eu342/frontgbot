import { TConnectingReduxState } from './Reducer';
import { IReduxState } from 'Entry/Store';

/** Селектор формы инструкции подключения. */
export function connectingStateSelector ({ user: { connecting: { state } } }: IReduxState): TConnectingReduxState {
    return state;
}