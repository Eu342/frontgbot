import { Help } from 'Modules/User/Modules/Connecting/Components/Form/Sections/Ending/Components/Help';
import { Support } from 'Modules/User/Modules/Connecting/Components/Form/Sections/Ending/Components/Support';
import React from 'react';
import styles from './Ending.module.scss';

// TODO Уменьшить отступ между кнопками.

/** Секция "Завершение настройки". */
export function Ending (): React.JSX.Element {
    return (
        <div className={ styles.ending }>
            <Help />

            <Support />
        </div>
    );
}