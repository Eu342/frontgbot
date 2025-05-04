import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { useAppShallowSelector } from 'Entry/Hooks/Redux';
import isUndefined from 'lodash/isUndefined';
import { CONNECTING_PAGE_PATH } from 'Modules/User/Entry/Pages/ConnectingPage/Path';
import { AddSubscribtion } from 'Modules/User/Modules/Connecting/Components/Form/Sections/Subscribtion/Components/AddSubscribtion';
import { EStepperStep } from 'Modules/User/Modules/Connecting/Enums';
import { connectingStateSelector } from 'Modules/User/Modules/Connecting/Redux/State/Selectors';
import React, { useEffect } from 'react';
import { generatePath } from 'react-router-dom';

/** Секция "Добавление подписки". */
export function Subscrition (): React.JSX.Element {
    const navigate = useNavigateWithParams();
    const { app } = useAppShallowSelector(connectingStateSelector);
    
    // Возврат на предыдущий шаг при неполных данных.
    useEffect(() => {
        if (isUndefined(app)) {
            navigate(generatePath(`../${CONNECTING_PAGE_PATH}`, { stepId: EStepperStep.DOWNLOAD }));
        }
    }, [navigate, app]);

    return (
        <AddSubscribtion />
    );
}