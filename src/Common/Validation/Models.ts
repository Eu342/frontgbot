import { ErrorObject } from 'ajv';

/** Тип ошибки схемы валидации. */
export type TError = Record<string, string[]>;

/** Тип ошибки оригинальной схемы валидации. */
export interface IOriginalError {
    missingProperty?: string
}

/** Тип ошибки кастомной схемы валидации. */
export interface ICustomError {
    errors: Array<ErrorObject<string, IOriginalError>>
}

/** Тип кастомной ошибки. */
export type TCustomError = ErrorObject<string, ICustomError>

