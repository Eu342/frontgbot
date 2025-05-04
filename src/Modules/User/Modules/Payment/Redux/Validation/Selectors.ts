import { IReduxState } from 'Entry/Store';
import get from 'lodash/get';
import { TError } from 'Common/Validation/Models';

/** Селектор ошибок формы платежей для полей. */
export function paymentErrorsSelector (key: string) {
    return ({ user: { payment: { validation } } }: IReduxState): Optional<string[]> => {
        return get(validation, key);
    };
}

/** Селектор всех ошибок валидации формы платежей. */
export function errorsStateSelector ({ user: { payment: { validation } } }: IReduxState): Partial<TError> {
    return validation;
}