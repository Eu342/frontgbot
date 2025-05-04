import React, { useEffect } from 'react';
import { AppSelect } from './Fields/AppSelect';
import { DownloadButton } from './Components/DownloadButton';
import { useAppShallowSelector } from 'Entry/Hooks/Redux';
import { connectingStateSelector } from '../../../../Redux/State/Selectors';
import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import isUndefined from 'lodash/isUndefined';
import { generatePath } from 'react-router-dom';
import { CONNECTING_PAGE_PATH } from 'Modules/User/Entry/Pages/ConnectingPage/Path';
import { EStepperStep } from '../../../../Enums';

/** Секция шага "Скачайте приложение". */
export function Download (): React.JSX.Element {
    const navigate = useNavigateWithParams();
    const { operationSystem } = useAppShallowSelector(connectingStateSelector);

    // Возврат на предыдущий шаг при неполных данных.
    useEffect(() => {
        if (isUndefined(operationSystem)) {
            navigate(generatePath(`../${CONNECTING_PAGE_PATH}`, { stepId: EStepperStep.INSTALL }));
        }
    }, [navigate, operationSystem]);

    return (
        <>
            <AppSelect />

            <DownloadButton />
        </>
    );
}

