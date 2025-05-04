import React from 'react';
import { TRANSLATIONS } from './Translations';
import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { Button } from 'Common/Components/Button';
import { EButtonType } from 'Common/Components/Button/Enums';
import styles from './NotFoundPage.module.scss';

/** Отображение не существующей страницы. */
export function NotFoundPage (): React.JSX.Element {
    const navigate = useNavigateWithParams();

    /** Обработчик возврата не предыдущую страницу. */
    const handleGoBack = (): void => {
        navigate('..');
    };

    return (
        <div className={ styles.notFound }>
            <span>
                {TRANSLATIONS.notFound}
            </span>

            <Button type={ EButtonType.SUBMIT } onClick={ handleGoBack }>
                {TRANSLATIONS.goBack}
            </Button>
        </div>
    );
}

