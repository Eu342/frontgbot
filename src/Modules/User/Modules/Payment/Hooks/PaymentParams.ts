import { EStepperStep } from 'Modules/User/Modules/Payment/Enums';
import { useParams } from 'react-router-dom';
import { isEnumValue } from 'Common/Helpers';

/** Интерфейс типизирванных параметров формы платежей. */
interface IReturnsUsePaymentFormParams {
    /** Шаг степпера. */
    stepId: Nullable<EStepperStep>
}

/** Хук получения типизированных параметров формы платежей. */
export function usePaymentFormParams (): IReturnsUsePaymentFormParams {
    const { stepId } = useParams();

    return {
        stepId: isEnumValue(EStepperStep, stepId) ? stepId : null,
    };
}