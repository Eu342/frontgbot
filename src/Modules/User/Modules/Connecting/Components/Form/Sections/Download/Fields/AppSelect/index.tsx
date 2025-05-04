import React from 'react';
import { FieldWrap } from 'Common/Components/FieldWrap';
import { Select } from 'Common/Components/Select';
import styles from './AppSelect.module.scss';
import { EAppType } from 'Modules/User/Modules/Connecting/Enums';
import { useAppDispatch, useAppShallowSelector } from 'Entry/Hooks/Redux';
import { changeAppAction } from 'Modules/User/Modules/Connecting/Redux/State/Actions';
import { connectingStateSelector } from 'Modules/User/Modules/Connecting/Redux/State/Selectors';
import { ISelectOption } from 'Common/Components/Select/Models';
import { renderDefaultEnumsOptions } from 'Common/Helpers/Options';
import { LOGOS_MAP } from './Logos';

// TODO Добавить логотип приложения Karing.

/**
 * Функция кастомного рендера опции.
 *
 * @param option Опция выбора.
 */
function renderCustomOption ({ title, value }: ISelectOption<EAppType>): React.JSX.Element {
    return (
        <div className={ styles.option }>
            <div className={ styles.option__logo }>
                {LOGOS_MAP[value]}
            </div>

            <span className={ styles.option__text }>
                {title}
            </span>
        </div>
    );
}

/**
 * Функция кастомного рендера значения селекта.
 *
 * @param value Значение селекта.
 */
function renderCustomValue (value: Optional<EAppType>): React.JSX.Element {
    return (
        <div className={ styles.option }>
            <div className={ styles.option__logo }>
                {value ? LOGOS_MAP[value] : null}
            </div>

            <span className={ styles.option__text }>
                {value}
            </span>
        </div>
    );
}

/** Поле выбора приложения. */
export function AppSelect (): React.JSX.Element {
    const dispatch = useAppDispatch();
    const { app } = useAppShallowSelector(connectingStateSelector);

    /**
     * Обработчик изменения значения поля.
     *
     * @param newValue Новое значение поля.
     */
    const handleChange = (newValue: EAppType): void => {
        dispatch(changeAppAction(newValue));
    };

    return (
        <FieldWrap>
            <Select<EAppType>
                value={ app }
                options={ renderDefaultEnumsOptions(EAppType) }
                onChange={ handleChange }
                renderCustomOption={ renderCustomOption }
                renderCustomValue={ renderCustomValue }
            />
        </FieldWrap>
    );
}

