import React from 'react';
import { EAppType } from 'Modules/User/Modules/Connecting/Enums';
import { HappLogo } from 'Common/Components/Logos/Happ';
import { KaringLogo } from 'Common/Components/Logos/Karing';

/** Карта логотипов приложений. */
export const LOGOS_MAP: Record<EAppType, React.JSX.Element> = {
    [EAppType.HAPP]: <HappLogo />,
    [EAppType.KARING]: <KaringLogo />
};