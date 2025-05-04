import { IFormControls } from 'Common/Components/FormWrap/Models';
import { TRANSLATIONS } from './Translations';
import { usePaymentFormParams } from '../../Hooks/PaymentParams';
import { useAppDispatch, useAppShallowSelector } from 'Entry/Hooks/Redux';
import { generatePath } from 'react-router-dom';
import { useCallback } from 'react';
import { EStepperStep } from 'Modules/User/Modules/Payment/Enums';
import { paymentStateSelector } from '../../Redux/State/Selectors';
import { getAmountListAction } from '../../Redux/Currency/Actions';
import { PAYMENT_PAGE_PATH } from 'Modules/User/Entry/Pages/PaymentPage/Path';
import { getPaymentLink } from '../../Redux/Amount/Actions';
import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { validate } from '../../Redux/Validation/Actions';
import { paymentFormSchema } from './Schema';
import isEmpty from 'lodash/isEmpty';
import { settingSelector } from 'Entry/Redux/Settings/Selectors';

/** Хук получения контроллеров формы. */
export function useFormControls (): IFormControls {
    const dispatch = useAppDispatch();
    const navigate = useNavigateWithParams();
    const { stepId } = usePaymentFormParams();
    const { userId } = useAppShallowSelector(settingSelector);
    const { amount, currency } = useAppShallowSelector(paymentStateSelector);

    /** Обработчик отправки формы. */
    const handleSubmit = useCallback((): void => {
        if (!userId) {
            return;
        }

        switch (stepId) {
            case EStepperStep.CURRENCY: {
                if (currency) {
                    dispatch(getAmountListAction()).unwrap()
                        .then(() => {
                            navigate(generatePath(`../${PAYMENT_PAGE_PATH}`, { stepId: EStepperStep.AMOUNT }));
                        })
                        .catch(() => alert(TRANSLATIONS.alert[stepId]));
                }

                return;
            }

            case EStepperStep.AMOUNT: {
                if (!currency) {
                    navigate(generatePath(`../${PAYMENT_PAGE_PATH}`, { stepId: EStepperStep.CURRENCY }));

                    return;
                }

                dispatch(validate({ schema: paymentFormSchema })).unwrap()
                    .then((errors) => {
                        if (isEmpty(errors)) {
                            dispatch(getPaymentLink()).unwrap()
                                .then((link) => {
                                    document.location.href = link;

                                    return;
                                })
                                .catch(() => alert(TRANSLATIONS.alert[stepId]));
                        }
                    });

                return;
            }

            default: return;
        }
    }, [dispatch, navigate, stepId, userId, currency, amount]);

    return {
        submitLabel: TRANSLATIONS.submitLabel,
        onSubmit: handleSubmit,
    };
}