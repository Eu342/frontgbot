import React from 'react';
import styles from './Balance.module.scss';
import { Form } from './Components/Form';

/** Модуль баланса личного кабинета. */
export default function Balance (): React.JSX.Element {
    return (
        <div className={ styles.balance }>
            <Form />
        </div>
    );
}

