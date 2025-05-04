import { IReduxState } from 'Entry/Store';
import { EReduxStatus } from 'Common/Redux/Enums';

/** Селектор флага загрузки ссылки на оплату. */
export function isPaymentLinkLoadingSelector ({ user: { payment: { amount: { status } } } }: IReduxState): boolean {
    return status === EReduxStatus.RUNNING;
}