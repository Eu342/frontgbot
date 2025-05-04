import React from 'react';
import { useAppShallowSelector } from 'Entry/Hooks/Redux';
import { connectingStateSelector } from 'Modules/User/Modules/Connecting/Redux/State/Selectors';
import { Button } from 'Common/Components/Button';
import { EButtonType } from 'Common/Components/Button/Enums';
import { TRANSLATIONS } from './Translations';
import styles from './DownloadButton.module.scss';
import { EAppType, EOperationSystemType } from 'Modules/User/Modules/Connecting/Enums';
import { TRANSLATIONS as COMMON_TRANSLATIONS } from 'Modules/User/Modules/Connecting/Components/Form/Translations';
import { 
    ANDROID_HAPP_LINK, 
    ANDROID_KARING_LINK, 
    IOS_HAPP_LINK, 
    IOS_KARING_LINK, 
    WINDOWS_KARING_LINK,
    WINDOWS_HAPP_LINK
 } from 'Modules/User/Modules/Connecting/Components/Form/Sections/Download/Components/DownloadButton/Consts';


/** Кнопка скачивания приложения. */
export function DownloadButton (): React.JSX.Element {
    const { operationSystem = EOperationSystemType.ANDROID, app } = useAppShallowSelector(connectingStateSelector);

    /** Обработчик нажания на кнопку. */
    const handleClick = (): void => {
        if (app === EAppType.KARING) {
            switch (operationSystem) {
                case EOperationSystemType.ANDROID:
                case EOperationSystemType.ANDROID_TV: {
                    window.open(ANDROID_KARING_LINK);

                    return;
                }

                case EOperationSystemType.IOS:
                case EOperationSystemType.MAC_OS:
                case EOperationSystemType.TV_OS: {
                    window.open(IOS_KARING_LINK, '_blank');

                    return;
                }

                case EOperationSystemType.WINDOWS: {
                    window.open(WINDOWS_KARING_LINK, '_blank');

                    return;
                }

                default: {
                    window.open(ANDROID_KARING_LINK);

                    return;
                }
            }
        } else {
            switch (operationSystem) {
                case EOperationSystemType.ANDROID:
                case EOperationSystemType.ANDROID_TV: {
                    window.open(ANDROID_HAPP_LINK, '_blank');
                    
                    return;
                }

                case EOperationSystemType.IOS:
                case EOperationSystemType.MAC_OS:
                case EOperationSystemType.TV_OS: {
                    window.open(IOS_HAPP_LINK, '_blank');

                    return;
                }

                case EOperationSystemType.WINDOWS: {
                    window.open(WINDOWS_HAPP_LINK, '_blank');
    
                    return;
                }
                
                default: {
                    window.open(ANDROID_HAPP_LINK, '_blank');
                    
                    return;
                }
            }
        }
    };

    return (
        <div className={ styles.download } onClick={ handleClick }>
            <Button type={ EButtonType.GENERAL }>
                {TRANSLATIONS.title + COMMON_TRANSLATIONS.options[operationSystem]}
            </Button>
        </div>
    );
}

