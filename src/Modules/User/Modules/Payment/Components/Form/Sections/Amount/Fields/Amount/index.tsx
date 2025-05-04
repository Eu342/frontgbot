import React from 'react';
import { FieldWrap } from 'Common/Components/FieldWrap';
import { AmountList } from '../../Components/AmountList';
import { Input } from 'Common/Components/Input';
import { useAppDispatch, useAppShallowSelector } from 'Entry/Hooks/Redux';
import { paymentStateSelector } from 'Modules/User/Modules/Payment/Redux/State/Selectors';
import isUndefined from 'lodash/isUndefined';
import { changeAmountAction } from 'Modules/User/Modules/Payment/Redux/State/Actions';
import { REQUIREMENTS } from './Requirements';
import { TRANSLATIONS } from './Translations';
import { MAX_PAYMENT_AMOUNT } from 'Modules/User/Modules/Payment/Consts';
import { validate } from 'Modules/User/Modules/Payment/Redux/Validation/Actions';
import { amountSchema } from './Schema';
import { paymentErrorsSelector } from 'Modules/User/Modules/Payment/Redux/Validation/Selectors';

/** Поле суммы. */
export function AmountField (): React.JSX.Element {
    const dispatch = useAppDispatch();
    const fieldKey = 'amount';
    const { amount } = useAppShallowSelector(paymentStateSelector);
    const errors = useAppShallowSelector(paymentErrorsSelector(fieldKey));

    /**
     * Обработчик потери фокуса полем.
     *
     * @param newValue Новое значение поля.
     */
    const handleBlur = (newValue: string): void => {
        const newAmount = +newValue;

        if (newAmount > MAX_PAYMENT_AMOUNT) {
            dispatch(changeAmountAction(MAX_PAYMENT_AMOUNT));
        } else {
            dispatch(changeAmountAction(newAmount || undefined));
        }

        dispatch(validate({ key: fieldKey, schema: amountSchema }));
    };

    return (
        <FieldWrap errors={ errors }>
            <Input
                value={ isUndefined(amount) ? undefined : `${amount}` }
                onChange={ handleBlur }
                pattern={ REQUIREMENTS.pattern }
                placeholder={ TRANSLATIONS.placeholder }
                maxLength={ REQUIREMENTS.maxLength }
            />

            <AmountList />
        </FieldWrap>
    );
}

