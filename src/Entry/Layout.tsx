import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { NotFoundPage } from './Pages/NotFoundPage';
import { MainPage } from './Pages/MainPage';
import styles from './Styles/Layout.module.scss';
import { Header } from 'Common/Components/Header';
import { UserPage } from './Pages/UserPage';
import { USER_PAGE_PATH } from './Pages/UserPage/Path';

/** Обёртка для энтри-компонента. */
export function Layout (): React.JSX.Element {
    return (
        <BrowserRouter>
            <Provider store={ store }>
                <Header />

                <main className={ styles.layout }>
                    <Routes>
                        {/** Гланая страница. */}
                        <Route element={ <MainPage /> } index />
                        {/** Страница личного кабинета. */}
                        <Route element={ <UserPage /> } path={ `${USER_PAGE_PATH}/*` } />
                        {/** Не найденная страница. */}
                        <Route path={'*'} element={ <NotFoundPage /> } />
                    </Routes>
                </main>
            </Provider>
        </BrowserRouter>
    );
}

