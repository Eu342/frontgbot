import React, { useEffect } from 'react';
import { FormWrap } from 'Common/Components/FormWrap';
import { useFormControls } from './Hooks';
import { BalanceSection } from './Components/BalanceSection';
import { Advertising } from 'Common/Components/Advertising';
import { useAppDispatch, useAppShallowSelector } from 'Entry/Hooks/Redux';
import { getUserDetails } from 'Modules/User/Modules/Balance/Redux/Get/Actions';
import { settingSelector } from 'Entry/Redux/Settings/Selectors';

/** Форма модуля баланса. */
export function Form (): React.JSX.Element {
    const dispatch = useAppDispatch();
    const { userId } = useAppShallowSelector(settingSelector);
    const controls = useFormControls();

    // Получение данных пользователя.
    useEffect(() => {
        if (userId) {
            dispatch(getUserDetails(userId));
        }
    }, [dispatch, userId]);

    return (
        <FormWrap controls={ controls }>
            {/** Секция баланса. */}
            <BalanceSection />
            {/** Блок рекламы. */}
            <Advertising />
        </FormWrap>
    );
}

