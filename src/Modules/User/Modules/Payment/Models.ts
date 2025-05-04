/** Интерфейс формы платежа. */
export interface IPaymentForm {
    /** Валюта. */
    currency: string;
    /** Сумма. */
    amount: number;
}

/** Интерфейс блока суммы. */
export interface IAmount {
    /** Наименование. */
    name: string,
    /** Сумма. */
    amount: number
}