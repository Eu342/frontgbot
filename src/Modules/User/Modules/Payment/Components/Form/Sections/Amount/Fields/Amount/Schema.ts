import { SchemaObject } from 'ajv';
import { TRANSLATIONS } from './Translations';

/** Сообщение об ошибке поля "Сумма". */
export const AMOUNT_ERROR_MESSAGE = TRANSLATIONS.schema;

/** Схема валидации поля "Сумма". */
export const amountSchema: SchemaObject = {
    type: 'number',
    errorMessage: {
        type: AMOUNT_ERROR_MESSAGE
    }
};