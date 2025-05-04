import { SchemaObject } from 'ajv';
import { CURRENCY_ERROR_MESSAGE, currencySchema } from './Sections/Currency/Fields/CurrencySelect/Schema';
import { AMOUNT_ERROR_MESSAGE, amountSchema } from './Sections/Amount/Fields/Amount/Schema';

/** Схема валидации формы оплаты. */
export const paymentFormSchema: SchemaObject = {
    type: 'object',
    properties: {
        currency: currencySchema,
        amount: amountSchema
    },
    required: ['currency', 'amount'],
    errorMessage: {
        required: {
            currency: CURRENCY_ERROR_MESSAGE,
            amount: AMOUNT_ERROR_MESSAGE,
        }
    }
};