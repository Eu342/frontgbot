import { IBalanceInfo } from '../../Models';
import { IReduxState } from 'Entry/Store';

/** Селектор данных модуля баланса. */
export function balanceGetSelector ({ user: { balance: { get } } }: IReduxState): Nullable<IBalanceInfo> {
    return get.data;
}