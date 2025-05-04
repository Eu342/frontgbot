import React, { useEffect, useState } from 'react';
import { TRANSLATIONS } from './Translations';
import { usePaymentFormParams } from '../../Hooks/PaymentParams';
import { useStepsConfig } from '../../Hooks/StepsConfig';
import { EStepperStep } from 'Modules/User/Modules/Payment/Enums';
import { AmountSection } from './Sections/Amount';
import { Currency } from './Sections/Currency';
import { FormWrap } from 'Common/Components/FormWrap';
import { useFormControls } from './Hooks';
import { EmptyBlock } from './Components/EmptyBlock';
import { Swiper } from 'Common/Components/Swiper';
import styles from './Form.module.scss';
import { useAppSelector } from 'Entry/Hooks/Redux';
import { isAmountListLoadingSelector } from '../../Redux/Currency/Selectors';
import { isPaymentLinkLoadingSelector } from '../../Redux/Amount/Selectors';

/** Карта шагов формы. */
const SECTIONS_MAP: Partial<Record<EStepperStep, React.JSX.Element>> = {
    [EStepperStep.CURRENCY]: <Currency />,
    [EStepperStep.AMOUNT]: <AmountSection />,
};

/** Форма пополнения баланса. */
export function Form (): React.JSX.Element {
    const { stepId } = usePaymentFormParams();
    const isInitialOpen = true; //stepId === EStepperStep.CURRENCY;
    const [isOpen, setIsOpen] = useState(isInitialOpen);
    const stepsConfig = useStepsConfig();
    const controls = useFormControls();
    const isAmountListLoading = useAppSelector(isAmountListLoadingSelector);
    const isPaymentLinkLoading = useAppSelector(isPaymentLinkLoadingSelector);

    // Отслеживание открытой страницы.
    useEffect(() => setIsOpen(isInitialOpen), [isInitialOpen]);

    return (
        <div className={ styles.form }>
            <Swiper isOpen={ isOpen } toggleSwipe={ setIsOpen }>
                <FormWrap
                    stepsConfig={ stepsConfig }
                    title={ TRANSLATIONS.title }
                    subTitle={ stepId ? TRANSLATIONS.subTitle[stepId] : undefined }
                    controls={ controls }
                    isLoading={ isAmountListLoading || isPaymentLinkLoading }
                >
                    <div className={styles.content}>
                        {stepId && SECTIONS_MAP[stepId]}
                    </div>

                    <EmptyBlock isShow={ isOpen } />
                </FormWrap>
            </Swiper>
        </div>
    );
}

