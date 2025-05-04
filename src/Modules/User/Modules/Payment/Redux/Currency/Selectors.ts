import { IReduxState } from 'Entry/Store';
import { EReduxStatus } from 'Common/Redux/Enums';
import { IAmount } from '../../Models';

/** Селектор списка сумм. */
export function amountListSelector ({ user: { payment: { currency } } }: IReduxState): Nullable<IAmount[]> {
    return currency.data;
}

/** Селектор флага загрузки списка сумм. */
export function isAmountListLoadingSelector ({ user: { payment: { currency } } }: IReduxState): boolean {
    return currency.status === EReduxStatus.RUNNING;
}