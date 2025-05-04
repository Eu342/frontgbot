import { createAction } from '@reduxjs/toolkit';
import { BALANCE_NAMESPACE } from './Consts';

/** Экшен сброса данных модуля баланса. */
export const resetBalanceAction = createAction(`${BALANCE_NAMESPACE}_RESET`);