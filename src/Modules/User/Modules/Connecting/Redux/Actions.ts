import { createAction } from '@reduxjs/toolkit';
import { CONNECTING_NAMESPACE } from './Consts';
import { EOperationSystemType } from '../Enums';

/** Экшен сброса данных модуля инструкции подключения. */
export const resetConnectingAction = createAction<EOperationSystemType>(`${CONNECTING_NAMESPACE}_RESET`);