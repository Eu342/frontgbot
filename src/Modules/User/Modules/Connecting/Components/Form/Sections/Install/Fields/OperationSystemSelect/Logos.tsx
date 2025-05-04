import React from 'react';
import { EOperationSystemType } from 'Modules/User/Modules/Connecting/Enums';
import { IOSLogo } from 'Common/Components/Logos/IOS';
import { WindowsLogo } from 'Common/Components/Logos/Windows';
import { AndroidLogo } from 'Common/Components/Logos/Android';
import { LinuxLogo } from 'Common/Components/Logos/Linux';

/** Карта логотипов операционных систем. */
export const LOGOS_MAP: Record<EOperationSystemType, React.JSX.Element> = {
    [EOperationSystemType.IOS]: <IOSLogo />,
    [EOperationSystemType.ANDROID]: <AndroidLogo />,
    [EOperationSystemType.WINDOWS]: <WindowsLogo />,
    [EOperationSystemType.MAC_OS]: <IOSLogo />,
    [EOperationSystemType.LINUX]: <LinuxLogo />,
    [EOperationSystemType.TV_OS]: <IOSLogo />,
    [EOperationSystemType.ANDROID_TV]: <AndroidLogo />,
};