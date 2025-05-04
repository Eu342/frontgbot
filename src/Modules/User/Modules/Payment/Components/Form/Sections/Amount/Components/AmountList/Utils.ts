import map from 'lodash/map';
import { IAmount } from 'Modules/User/Modules/Payment/Models';

/**
 * Функция получения списка опций выбора суммы.
 *
 * @param amountList Список сумм.
 */
export function getAmountListOptions (amountList: Nullable<IAmount[]>): string[] {
    return map(amountList, ({ amount }) => `${amount}`);
}