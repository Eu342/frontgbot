/**
 * Функция проверки, является ли строка частью Енама.
 *
 * @param enumObject Енам.
 * @param value Строка.
 */
export function isEnumValue<T extends Record<string, string>> (enumObject: T, value: Optional<string>): value is T[keyof T] {
    return !!value && Object.values(enumObject).includes(value);
}