import React, { useState } from 'react';
import styles from './Form.module.scss';
import { Swiper } from 'Common/Components/Swiper';
import { FormWrap } from 'Common/Components/FormWrap';
import { useConnectingFormParams } from '../../Hooks/ConnectingParams';
import { useFormControls } from './Hooks';
import { EOperationSystemType, EStepperStep } from '../../Enums';
import { Install } from './Sections/Install';
import { Download } from './Sections/Download';
import { useAppShallowSelector } from 'Entry/Hooks/Redux';
import { connectingStateSelector } from '../../Redux/State/Selectors';
import { translate } from './Translations';
import { Subscrition } from 'Modules/User/Modules/Connecting/Components/Form/Sections/Subscribtion';
import { Ending } from 'Modules/User/Modules/Connecting/Components/Form/Sections/Ending';
import includes from 'lodash/includes';

/** Карта шагов формы. */
const SECTIONS: Record<EStepperStep, React.JSX.Element> = {
    [EStepperStep.INSTALL]: <Install />,
    [EStepperStep.DOWNLOAD]: <Download />,
    [EStepperStep.SUBSCRIBTION]: <Subscrition />,
    [EStepperStep.ENDING]: <Ending />
};

/** Массив для отдельного сабтайтла. */
const CUSTOM_SUBTITLE = [EOperationSystemType.ANDROID_TV, EOperationSystemType.LINUX, EOperationSystemType.TV_OS];

/** Форма инструкции подключения. */
export function Form (): React.JSX.Element {
    const { stepId } = useConnectingFormParams();
    const [isOpen, setIsOpen] = useState(true);
    const controls = useFormControls();
    const { app, operationSystem } = useAppShallowSelector(connectingStateSelector);
    const isCustomSubtitle = includes(CUSTOM_SUBTITLE, operationSystem);

    /** Функция получения сабтайтла. */
    const getSubtitle = (): Optional<string> => {
        if (isCustomSubtitle) {
            return translate('customSubtitle');
        }

        if (stepId) {
            return translate(`subTitle.${stepId}`, { app, market: translate(`options.${operationSystem}`) });
        }

        return undefined;
    };

    return (
        <div className={ styles.form }>
            <Swiper isOpen={ isOpen } toggleSwipe={ setIsOpen }>
                <FormWrap
                    title={ stepId ? translate(`title.${stepId}`) : undefined }
                    subTitle={ getSubtitle() }
                    controls={ controls }
                    >
                    {stepId && SECTIONS[stepId]}
                </FormWrap>
            </Swiper>
        </div>
    );
}

