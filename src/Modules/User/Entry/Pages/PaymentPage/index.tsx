import React, { Suspense } from 'react';
import Payment from 'Modules/User/Modules/Payment';

/** Страница оплаты. */
export function PaymentPage (): React.JSX.Element {
    return (
        <Suspense>
            <Payment />
        </Suspense>
    );
}

