import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PAYMENT_PAGE_PATH } from './Pages/PaymentPage/Path';
import { PaymentPage } from './Pages/PaymentPage';
import { BALANCE_PAGE_PATH } from './Pages/BalancePage/Path';
import { BalancePage } from './Pages/BalancePage';
import { CONNECTING_PAGE_PATH } from './Pages/ConnectingPage/Path';
import { ConnectingPage } from './Pages/ConnectingPage';
import { useGetUserId } from 'Entry/Hooks/User';
import styles from './User.module.scss';

/** Модуль пользователя. */
export default function User (): React.JSX.Element {
    // Получение идентификатора пользователя.
    useGetUserId();

    return (
        <div className={styles.user}>
            <Routes>
                {/** Страница баланса. */}
                <Route path={ BALANCE_PAGE_PATH } element={ <BalancePage /> } />
                {/** Страница оплаты. */}
                <Route path={ PAYMENT_PAGE_PATH } element={ <PaymentPage /> } />
                {/** Страница инструкции подключения. */}
                <Route path={ CONNECTING_PAGE_PATH } element={ <ConnectingPage /> } />
            </Routes>
        </div>
    );
}

