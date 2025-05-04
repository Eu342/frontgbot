import { Button } from 'Common/Components/Button';
import React from 'react';
import { TRANSLATIONS } from './Translations';
import { EButtonType } from 'Common/Components/Button/Enums';
import { useAppShallowSelector } from 'Entry/Hooks/Redux';
import { balanceGetSelector } from 'Modules/User/Modules/Balance/Redux/Get/Selectors';
import { connectingStateSelector } from 'Modules/User/Modules/Connecting/Redux/State/Selectors';
import { EAppType } from 'Modules/User/Modules/Connecting/Enums';
import { HAPP_DEEP_LINK, KARING_DEEP_LINK } from 'Common/Consts';
import styles from './AddSubscription.module.scss';

/** Кнопка добавления подписки. */
export function AddSubscribtion (): React.JSX.Element {
    const { app } = useAppShallowSelector(connectingStateSelector);
    const { account } = useAppShallowSelector(balanceGetSelector) || {};
    const { ru_subscription_url } = account || {};

    /** Обработчик нажатия на кнопку. */
    const handleClick = (): void => {
        if (!ru_subscription_url) {
            return;
        }

        if (app === EAppType.KARING) {
            window.open(`${KARING_DEEP_LINK}${ru_subscription_url}`, '_blank');
        } else {
            window.open(`${HAPP_DEEP_LINK}${ru_subscription_url}`, '_blank');
        }
    };

    return (
        <div className={ styles.addSubcriptionButton }>
            <Button type={ EButtonType.GENERAL } onClick={ handleClick }>
                {TRANSLATIONS.title}
            </Button>
        </div>
    );
}