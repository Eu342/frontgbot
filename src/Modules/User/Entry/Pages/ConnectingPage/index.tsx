import React, { Suspense } from 'react';
import Connecting from 'Modules/User/Modules/Connecting';

/** Страница инструкции подключения. */
export function ConnectingPage (): React.JSX.Element {
    return (
        <Suspense>
            <Connecting />
        </Suspense>
    );
}

