import { EStepperStep } from 'Modules/User/Modules/Payment/Enums';

export const TRANSLATIONS = {
    title: 'Пополнение баланса',
    subTitle: {
        [EStepperStep.CURRENCY]: 'Выберите способ пополнения и нажмите “Далее”',
        [EStepperStep.AMOUNT]: 'Введите желаемую сумму и нажмите “Далее”',
        [EStepperStep.SUCCESS]: ''
    },
    submitLabel: 'Далее',
    alert: {
        [EStepperStep.CURRENCY]: 'Не удалось отправить выбранный тип валюты. Пожалуйста, попробуйте повторить попытку.',
        [EStepperStep.AMOUNT]: 'Не удалось получить ссылку на оплату. Пожалуйста, попробуйте повторить попытку.'
    }
};