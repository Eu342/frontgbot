import { ISettingsReduxState } from 'Entry/Redux/Settings/Reducer';
import { IReduxState } from 'Entry/Store';

/** Селектор получения глобальных параметров приложения. */
export function settingSelector ({ settings }: IReduxState): ISettingsReduxState {
    return settings;
}