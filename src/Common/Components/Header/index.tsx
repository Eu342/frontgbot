import React from 'react';
import styles from './Header.module.scss';
import { TRANSLATIONS } from './Translations';
import { Logo } from './Components/Logo';
import { Arrow } from '../Arrow';
import { EArrowDirection } from '../Arrow/Enums';
import { useNavigateWithParams } from 'Entry/Hooks/Navigate';
import { USER_PAGE_PATH } from 'Entry/Pages/UserPage/Path';
import { BALANCE_PAGE_PATH } from 'Modules/User/Entry/Pages/BalancePage/Path';
import { useLocation } from 'react-router-dom';
import { IBaseComponentProps } from 'Common/Models';

type TProps = IBaseComponentProps

/** Шапка приложения. */
export function Header (_: TProps) : React.JSX.Element {
    const navigate = useNavigateWithParams();
    const { pathname } = useLocation();
    const isUserBalancePath = pathname === `${USER_PAGE_PATH}/${BALANCE_PAGE_PATH}`;

    /** Обработчик возврата на главную страницу. */
    const handleGoBack = (): void => {
        navigate(`../${USER_PAGE_PATH}/${BALANCE_PAGE_PATH}`);
    };

    return (
        <header className={styles.header}>
            {isUserBalancePath ? null : (
                <div className={styles.headerButton} onClick={handleGoBack}>
                    <Arrow direction={EArrowDirection.X} isActive={false}/>
                </div>
            )}

            <div className={styles.logo}>
                <Logo/>
            </div>

            <div className={styles.title}>
                {TRANSLATIONS.title}
            </div>
        </header>
    );
}

