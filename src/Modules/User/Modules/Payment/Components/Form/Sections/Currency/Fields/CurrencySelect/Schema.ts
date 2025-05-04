import { SchemaObject } from 'ajv';
import { TRANSLATIONS } from './Translations';

/** Сообщение об ошибке селекта валюты. */
export const CURRENCY_ERROR_MESSAGE = TRANSLATIONS.schema;

/** Схема валидации селекта валюты. */
export const currencySchema: SchemaObject = {
    type: 'string',
    minLength: 1,
    errorMessage: {
        type: CURRENCY_ERROR_MESSAGE,
        minLength: CURRENCY_ERROR_MESSAGE
    }
};