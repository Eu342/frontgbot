import { createAction } from '@reduxjs/toolkit';
import { CONNECTING_NAMESPACE } from '../Consts';
import { EAppType, EOperationSystemType } from '../../Enums';

/** Экшен изменения типа операционной системы. */
export const changeOSAction = createAction<EOperationSystemType>(`${CONNECTING_NAMESPACE}_CHANGE_OS`);

/** Экшен изменения типа приложения. */
export const changeAppAction = createAction<EAppType>(`${CONNECTING_NAMESPACE}_CHANGE_APP`);