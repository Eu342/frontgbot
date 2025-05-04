import React, { Suspense } from 'react';
import User from 'Modules/User/Entry';

/** Страница Личного кабинета. */
export function UserPage (): React.JSX.Element {
    return (
        <Suspense>
            <User />
        </Suspense>
    );
}

