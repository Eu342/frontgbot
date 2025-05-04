import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { IFormControls } from 'Common/Components/FormWrap/Models';
import { CONNECTING_PAGE_PATH } from 'Modules/User/Entry/Pages/ConnectingPage/Path';
import { TRANSLATIONS } from './Translations';
import { generatePath } from 'react-router-dom';
import { EStepperStep } from 'Modules/User/Modules/Connecting/Enums';

/** Хук получения контроллеров формы баланса. */
export function useFormControls (): IFormControls {
    const navigate = useNavigateWithParams();

    /** Обработчик перехода в режим настройки. */
    const handleSubmit = (): void => {
        navigate(generatePath(`../${CONNECTING_PAGE_PATH}`, { stepId: EStepperStep.INSTALL }));
    };

    return {
        submitLabel: TRANSLATIONS.submit,
        onSubmit: handleSubmit
    };
}
