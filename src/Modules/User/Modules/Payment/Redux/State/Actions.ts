import { createAction } from '@reduxjs/toolkit';
import { PAYMENT_NAMESPACE } from '../Consts';

/** Экшен изменения типа валюты. */
export const changeCurrencyTypeAction = createAction<string>(`${PAYMENT_NAMESPACE}_CHANGE_VAULT`);

/** Экшен изменения суммы. */
export const changeAmountAction = createAction<Optional<number>>(`${PAYMENT_NAMESPACE}_CHANGE_AMOUNT`);

