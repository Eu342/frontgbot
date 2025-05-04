import { ISelectOption } from '../Components/Select/Models';
import map from 'lodash/map';

/**
 * Фукнция рендера дефолтного списка опций из енама.
 *
 * @param enumerableObject Енам.
 */
export function renderDefaultEnumsOptions <T extends string>(enumerableObject: { [key: string]: T }): ISelectOption<T>[] {
    return map(Object.values(enumerableObject), (option) => ({
        title: option,
        value: option,
    }));
}