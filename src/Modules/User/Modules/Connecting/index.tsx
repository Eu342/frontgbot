import React from 'react';
import styles from './Connecting.module.scss';
import { Form } from './Components/Form';

/** Модуль инструкции подключения. */
export default function Connecting (): React.JSX.Element {
    return (
        <div className={ styles.connecting }>
            <Form />
        </div>
    );
}

