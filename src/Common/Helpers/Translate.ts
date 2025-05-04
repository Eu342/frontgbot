import get from 'lodash/get';
import split from 'lodash/split';
import map from 'lodash/map';
import has from 'lodash/has';
import join from 'lodash/join';
import replace from 'lodash/replace';

/** Тип объекта достпуного для транслитерации. */
type TTranslationResource = { [key: string]: string | TTranslationResource }

/** Тип возвращаемой функции. */
type TTranslateReturns<T extends TTranslationResource> = (key: DeepPrimitiveKey<T>, params?: Record<string, Optional<string>>) => string;

/** Регулярное выражение для поиска параметров в строке. */
const PARAM_REGEX = '^\\{\\{.*\\}\\}$';

/** Функция получения метода перевода текста с изменяемыми параметрами. */
export function Translate (translation: TTranslationResource): { translate: TTranslateReturns<TTranslationResource> } {
    const translate = (key: DeepPrimitiveKey<typeof translation>, params?: Record<string, Optional<string>>): string => {
        const field = String(get(translation, key));
        const fieldParts = map(split(field, ' '), (value: string) => {
            const unmaskedValue = replace(value, /\W/g, '');

            if (value.match(PARAM_REGEX) && has(params, unmaskedValue)) {
                return params[unmaskedValue];
            }

            return value;
        });


        return join(fieldParts, ' ');
    };

    return { translate };
}