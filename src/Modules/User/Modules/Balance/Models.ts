/** Интерфейс данных аккаунта. */
export interface IAccount {
    /** Ключ авторизации в приложении. */
    vlessKey: string;
    /** Глобальная ссылка для подключения. */
    global_subscription_url: string,
    /** Ссылка для подключения в РФ. */
    ru_subscription_url: string
}

/** Интерфейс модуля баланса пользователя. */
export interface IBalanceInfo {
    /** Аккаунт. */
    account?: IAccount
    /** Баланс. */
    balance: number;
    /** Реферальная ссылка бота. */
    bot_referral_link?: string;
    /** Номер устройства. */
    device_number: number;
    /** Дата создания. */
    expire: string;
    /** Полное имя. */
    full_name?: string;
    /** Ссылка для подписки. */
    subscription_url: string;
    /** Реферальная ссылка браузера. */
    web_referral_link?: string,
}