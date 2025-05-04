import React, { useEffect } from 'react';
import styles from './Styles/MainPage.module.scss';
import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { USER_PAGE_PATH } from '../UserPage/Path';
import { BALANCE_PAGE_PATH } from 'Modules/User/Entry/Pages/BalancePage/Path';

/** Главная страница приложения. */
export function MainPage (): React.JSX.Element {
    const navigate = useNavigateWithParams();

    // Переход на страницу Личного кабинета.
    useEffect(() => {
        navigate(`${USER_PAGE_PATH}/${BALANCE_PAGE_PATH}`);
    }, []);

    return (
        <div className={ styles.mainPage }>

        </div>
    );
}

