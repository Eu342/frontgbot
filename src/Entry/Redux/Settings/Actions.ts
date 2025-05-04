import { createAction } from '@reduxjs/toolkit';

/** Пространство экшенов редьюсера глобальных параметров. */
const SETTINGS_NAMESPACE = 'SETTINGS';

/** Экшен установки идентификатора пользователя. */
export const setUserIdAction = createAction<string>(`${SETTINGS_NAMESPACE}_SET_USER_ID`);