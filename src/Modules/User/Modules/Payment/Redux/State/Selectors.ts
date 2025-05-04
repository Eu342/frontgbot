import { TPaymentReduxState } from './Reducer';
import { IReduxState } from 'Entry/Store';

/** Селектор формы платежей. */
export function paymentStateSelector ({ user: { payment: { state } } }: IReduxState): TPaymentReduxState {
    return state;
}