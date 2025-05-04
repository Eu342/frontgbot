import { IStepperStepConfig } from 'Common/Components/Stepper/Models';
import { usePaymentFormParams } from './PaymentParams';
import { EStepperStep } from 'Modules/User/Modules/Payment/Enums';

/** Хук получения конфигурации степпера. */
export function useStepsConfig (): IStepperStepConfig[] {
    const { stepId } = usePaymentFormParams();

    return [
        // Валюта.
        {
            id: EStepperStep.CURRENCY,
            isActive: stepId === EStepperStep.CURRENCY
        },
        // Сумма.
        {
            id: EStepperStep.AMOUNT,
            isActive: stepId === EStepperStep.AMOUNT
        },
        // Успешная операция.
        {
            id: EStepperStep.SUCCESS,
            isActive: false
        }
    ];
}