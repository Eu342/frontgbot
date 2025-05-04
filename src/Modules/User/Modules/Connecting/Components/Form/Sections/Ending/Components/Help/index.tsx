import { Button } from 'Common/Components/Button';
import React from 'react';
import { TRANSLATIONS } from './Translations';
import { EButtonType } from 'Common/Components/Button/Enums';
import { SUPPORT_DEEP_LINK } from 'Common/Consts';

/** Кнопка "Помощь". */
export function Help (): React.JSX.Element {
    /** Обработчик нажатия на кнопку. */
    const handleClick = (): void => {
        window.open(SUPPORT_DEEP_LINK, '_blank');
    };

    return (
        <Button type={ EButtonType.GENERAL } onClick={ handleClick }>
            {TRANSLATIONS.title}
        </Button>
    );
}