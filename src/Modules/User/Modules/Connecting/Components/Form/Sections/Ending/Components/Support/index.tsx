import React from 'react';
import { TRANSLATIONS } from './Translations';
import { EButtonType } from 'Common/Components/Button/Enums';
import { Button } from 'Common/Components/Button';
import { SUPPORT_DEEP_LINK } from 'Common/Consts';

/** Кнопка "Поддержка". */
export function Support (): React.JSX.Element {
    /** Обработчик нажатия на кнопку. */
        const handleClick = (): void => {
            window.open(SUPPORT_DEEP_LINK, '_blank');
        };

    return (
        <Button type={ EButtonType.ALTERNATIVE } onClick={ handleClick }>
            {TRANSLATIONS.title}
        </Button>
    );
}