import { createAction } from '@reduxjs/toolkit';
import { PAYMENT_NAMESPACE } from './Consts';

/** Сброс данных платежей. */
export const resetPaymentAction = createAction(`${PAYMENT_NAMESPACE}_RESET`);