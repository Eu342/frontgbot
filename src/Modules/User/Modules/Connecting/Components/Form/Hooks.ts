import { IFormControls } from 'Common/Components/FormWrap/Models';
import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { useConnectingFormParams } from '../../Hooks/ConnectingParams';
import { TRANSLATIONS } from './Translations';
import { EStepperStep } from '../../Enums';
import { generatePath } from 'react-router-dom';
import { CONNECTING_PAGE_PATH } from 'Modules/User/Entry/Pages/ConnectingPage/Path';
import { BALANCE_PAGE_PATH } from 'Modules/User/Entry/Pages/BalancePage/Path';

/** Хук получения контроллеров формы. */
export function useFormControls (): IFormControls {
    const navigate = useNavigateWithParams();
    const { stepId } = useConnectingFormParams();

    /** Обработчик отправки формы. */
    const handleSubmit = (): void => {
        switch (stepId) {
            case EStepperStep.INSTALL: {
                navigate(generatePath(`../${CONNECTING_PAGE_PATH}`, { stepId: EStepperStep.DOWNLOAD }));

                return;
            }


            case EStepperStep.DOWNLOAD: {
                navigate(generatePath(`../${CONNECTING_PAGE_PATH}`, { stepId: EStepperStep.SUBSCRIBTION }));

                return;
            }

            case EStepperStep.SUBSCRIBTION: {
                navigate(generatePath(`../${CONNECTING_PAGE_PATH}`, { stepId: EStepperStep.ENDING }));

                return;
            }

            case EStepperStep.ENDING: {
                navigate(`../${BALANCE_PAGE_PATH}`);

                return;
            }

            default: return;
        }
    };

    return {
        submitLabel: stepId === EStepperStep.ENDING ? TRANSLATIONS.ending : TRANSLATIONS.submit,
        onSubmit: handleSubmit
    };
}