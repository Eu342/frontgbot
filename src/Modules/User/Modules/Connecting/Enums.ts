/** Тип шага формы инструкции подключения. */
export enum EStepperStep {
    /** Установка и настройка. */
    INSTALL = 'INSTALL',
    /** Скачайте приложение. */
    DOWNLOAD = 'DOWNLOAD',
    /** Добавление подписки. */
    SUBSCRIBTION = 'SUBSCRIBTION',
    /** Завершение настройки. */
    ENDING = 'ENDING'
}

/** Тип операционой системы. */
export enum EOperationSystemType {
    /** iOS. */
    IOS = 'iOS',
    /** Android. */
    ANDROID = 'Android',
    /** Windows. */
    WINDOWS = 'Windows',
    /** masOS. */
    MAC_OS = 'maсOS',
    /** Linux. */
    LINUX = 'Linux',
    /** tvOS. */
    TV_OS = 'tvOS',
    /** Android TV. */
    ANDROID_TV = 'Android TV'
}

/** Тип приложения. */
export enum EAppType {
    /** Happ. */
    HAPP = 'Happ',
    /** Karing. */
    KARING = 'Karing'
}