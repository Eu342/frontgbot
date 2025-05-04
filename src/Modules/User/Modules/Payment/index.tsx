import React, { useEffect } from 'react';
import styles from './Payment.module.scss';
import { Form } from './Components/Form';
import { useAppDispatch } from 'Entry/Hooks/Redux';
import { resetPaymentAction } from './Redux/Actions';
import { getCurrencyListAction } from './Redux/Get/Actions';

/** Страница оплаты. */
export default function Payment () : React.JSX.Element {
    const dispatch = useAppDispatch();

    // Получение списка валют.
    useEffect(() => {
        dispatch(getCurrencyListAction());
    }, [dispatch]);

    // Сброс данных при размонтировании страницы.
    useEffect(() => () => {
        dispatch(resetPaymentAction());
    },[dispatch]);

    return (
        <div className={ styles.payment }>
            <Form />
        </div>
    );
}

