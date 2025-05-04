import { IReduxState } from 'Entry/Store';
import { EReduxStatus } from 'Common/Redux/Enums';

/** Салектор получения списка валют. */
export function getCurrencyListSelector ({ user: { payment: { get } } }: IReduxState): Nullable<string[]> {
    return get.data;
}

/** Салектор получения флага загрузки списка валют. */
export function isCurrencyListLoadingSelector ({ user: { payment: { get } } }: IReduxState): boolean {
    return get.status === EReduxStatus.RUNNING;
}