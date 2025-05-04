import { EOperationSystemType, EStepperStep } from '../../Enums';
import { Translate } from 'Common/Helpers/Translate';

export const TRANSLATIONS = {
    title: {
        [EStepperStep.INSTALL]: 'Установка и настройка',
        [EStepperStep.DOWNLOAD]: 'Скачайте приложение',
        [EStepperStep.SUBSCRIBTION]: 'Добавление подписки',
        [EStepperStep.ENDING]: 'Готово!',
    },
    subTitle: {
        [EStepperStep.INSTALL]: 'Выберите вашу операционную систему из списка и нажмите “Далее”',
        [EStepperStep.DOWNLOAD]: 'Скачайте приложение {{app}} {{market}} и перейдите к следующему шагу',
        [EStepperStep.SUBSCRIBTION]: 'Нажмите на “Добавить подписку” и она автоматически добавится в приложение, затем перейдите к следующему шагу',
        [EStepperStep.ENDING]: 'Если у вас возникли сложности, то перейдите в раздел “Помощь” или напишите нам'
    },
    options: {
        [EOperationSystemType.IOS]: 'из\nAppStore',
        [EOperationSystemType.ANDROID]: 'из\nGoogle Play',
        [EOperationSystemType.WINDOWS]: 'с Нашего сайта',
        [EOperationSystemType.ANDROID_TV]: 'из\nGooglePlay',
        [EOperationSystemType.MAC_OS]: 'из\nAppStore',
        [EOperationSystemType.LINUX]: 'с Нашего сайта',
        [EOperationSystemType.TV_OS]: 'из\nAppStore'
    },
    submit: 'Далее',
    ending: 'Завершить настройку'
};

export const { translate } = Translate(TRANSLATIONS);
