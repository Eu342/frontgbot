import { ISelectOption } from 'Common/Components/Select/Models';
import map from 'lodash/map';

/**
 * Функция получения списка опция для выбора валют.
 *
 * @param currencyList Список валют
 */
export function getCurrencyListOptions (currencyList: Nullable<string[]>): ISelectOption<string>[] {
    return map(currencyList, (currency) => ({
        title: currency,
        value: currency
    }));
}