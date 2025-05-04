import { TAsyncData } from 'Common/Redux/Models';
import { EReduxStatus } from 'Common/Redux/Enums';
import { IServerError } from 'Entry/Store';
import has from 'lodash/has';

/**
 * Функция получения начального состояния асинхронного редьюсера.
 *
 * @param initialState Начальные данные.
 */
export function getInitialState <T>(initialState: T): TAsyncData<T> {
    return {
        status: EReduxStatus.IDLE,
        data: initialState,
        hasError: false
    };
}

/**
 * Тайпгард для проверки типа ошибки.
 * 
 * @param error Ошибка.
 */
export function isErrorWithValue (error: unknown): error is IServerError {
    return has(error, 'message');
} 