import React from 'react';
import { useAppDispatch, useAppSelector, useAppShallowSelector } from 'Entry/Hooks/Redux';
import { changeCurrencyTypeAction } from 'Modules/User/Modules/Payment/Redux/State/Actions';
import { FieldWrap } from 'Common/Components/FieldWrap';
import { Select } from 'Common/Components/Select';
import { paymentStateSelector } from 'Modules/User/Modules/Payment/Redux/State/Selectors';
import { getCurrencyListSelector, isCurrencyListLoadingSelector } from 'Modules/User/Modules/Payment/Redux/Get/Selectors';
import { getCurrencyListOptions } from './Utils';
import { paymentErrorsSelector } from 'Modules/User/Modules/Payment/Redux/Validation/Selectors';

/** Поле выбора типа валюты. */
export function CurrencySelect (): React.JSX.Element {
    const dispatch = useAppDispatch();
    const fieldKey = 'currency';
    const isLoading = useAppSelector(isCurrencyListLoadingSelector);
    const { currency } = useAppShallowSelector(paymentStateSelector);
    const currencyList = useAppShallowSelector(getCurrencyListSelector);
    const options = getCurrencyListOptions(currencyList);
    const errors = useAppShallowSelector(paymentErrorsSelector(fieldKey));

    /**
     * Обработчик изменения типа валюты.
     *
     * @param newValue Новое значение поля.
     */
    const handleChange = (newValue: string): void => {
        dispatch(changeCurrencyTypeAction(newValue));
    };

    return (
        <FieldWrap errors={ errors }>
            <Select
                value={ currency }
                options={ options }
                onChange={ handleChange }
                isLoading={ isLoading }
            />
        </FieldWrap>
    );
}

