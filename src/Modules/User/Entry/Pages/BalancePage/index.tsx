import React, { Suspense } from 'react';
import Balance from 'Modules/User/Modules/Balance';

/** Страница баланса Личного кабинета. */
export function BalancePage (): React.JSX.Element {
    return (
        <Suspense>
            <Balance />
        </Suspense>
    );
}

