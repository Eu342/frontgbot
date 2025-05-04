import React from 'react';
import styles from './BalanceSection.module.scss';
import { TRANSLATIONS } from './Translations';
import { Button } from 'Common/Components/Button';
import { EButtonType } from 'Common/Components/Button/Enums';
import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { PAYMENT_PAGE_PATH } from 'Modules/User/Entry/Pages/PaymentPage/Path';
import { EStepperStep } from 'Modules/User/Modules/Payment/Enums';
import { generatePath } from 'react-router-dom';
import { useAppShallowSelector } from 'Entry/Hooks/Redux';
import { balanceGetSelector } from '../../../../Redux/Get/Selectors';

// TODO Изменить размер кнопок в блоке.

/** Секция баланса. */
export function BalanceSection (): React.JSX.Element {
    const navigate = useNavigateWithParams();
    const { balance = 0 } = useAppShallowSelector(balanceGetSelector) || {};

    /** Обработчик перехода на страницу оплаты. */
    const handleRedirectToPayment = (): void => {
        navigate(generatePath(`../${PAYMENT_PAGE_PATH}`, { stepId: EStepperStep.CURRENCY }));
    };

    return (
        <div className={ styles.balanceSection }>
            <div className={ styles.balance }>
                <span className={styles.balance__title}>
                    {TRANSLATIONS.title}
                </span>

                <div className={ styles.balance__value }>
                    {`${balance} ${TRANSLATIONS.vault}`}
                </div>
            </div>

            <div className={ styles.buttons }>
                <Button type={ EButtonType.GENERAL } onClick={ handleRedirectToPayment }>
                    {TRANSLATIONS.payment}
                </Button>

                <Button type={ EButtonType.ALTERNATIVE }>
                    {TRANSLATIONS.join}
                </Button>
            </div>
        </div>
    );
}

