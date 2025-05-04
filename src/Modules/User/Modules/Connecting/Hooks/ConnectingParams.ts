import { EStepperStep } from '../Enums';
import { useParams } from 'react-router-dom';
import { isEnumValue } from 'Common/Helpers';

/** Интерфейс типизирванных параметров формы инструкции подключения. */
interface IReturnsUseConnectingFormParams {
    stepId: Nullable<EStepperStep>;
}

/** Хук получения типизированных параметров формы инструкции подключения. */
export function useConnectingFormParams (): IReturnsUseConnectingFormParams {
    const { stepId } = useParams();

    return {
        stepId: isEnumValue(EStepperStep, stepId) ? stepId : null,
    };
}