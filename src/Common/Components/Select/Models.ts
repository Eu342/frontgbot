/** Интерфейс опции выбора из статичного списка. */
export interface ISelectOption<T> {
    /** Заголовок. */
    title: string;
    /** Значение. */
    value: T
}