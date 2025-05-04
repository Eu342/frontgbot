import { EAppType, EOperationSystemType } from './Enums';

/** Интерфейс данных формы инструкции подключения. */
export interface IConnectingForm {
    /** Операционная система. */
    operationSystem: EOperationSystemType;
    /** Приложение. */
    app: EAppType;
}