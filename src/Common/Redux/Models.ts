import { EReduxStatus } from './Enums';

/** Тип асинхронных данных редакс-стейта. */
export type TAsyncData<T> = {
    /** Статус редьюсера. */
    status: EReduxStatus;
    /** Данные редьюсера. */
    data: T;
    /** Флаг наличия ошибки. */
    hasError: boolean
}
