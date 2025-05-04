import { ErrorObject } from 'ajv';
import { TCustomError, TError } from './Models';
import isArray from 'lodash/isArray';
import reduce from 'lodash/reduce';
import trim from 'lodash/trim';
import head from 'lodash/head';

/**
 * Тайп-гард для определения кастомной ошибки.
 *
 * @param error Ошибка.
 */
function isCustomError (error: ErrorObject): error is TCustomError {
    const { keyword, params, message } = error;

    return keyword === 'errorMessage' && !!message && isArray(params?.errors);
}

/**
 * Функция создания пути ошибки из ajv до поля.
 *
 * @param path Путь из ajv.
 */
function createFieldPath (path: string): string {
    return trim(path, '/').replaceAll('/', '.');
}

/**
 * Фукнция перевода ошибок ajv в ошибки полей.
 *
 * @param errors Ошибки ajv.
 * @param [key] Ключ поля.
 */
export function getAjvErrors (errors: Optional<Nullable<ErrorObject[]>>, key?: string): TError {
    return reduce<ErrorObject, TError>(errors, (result, error) => {
        if (isCustomError(error)) {
            const { instancePath, params, message } = error;
            const requiredError = head(params.errors)?.keyword === 'required';
            let fieldName = key || createFieldPath(instancePath);

            if (requiredError) {
                fieldName = head(params.errors)?.params?.missingProperty || '';
            }

            return {
                ...result,
                [fieldName]: [...result[fieldName] || [], message || '']
            };
        }

        return result;
    }, {});
}