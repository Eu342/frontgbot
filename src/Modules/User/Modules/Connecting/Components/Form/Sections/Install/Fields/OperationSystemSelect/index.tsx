import React from 'react';
import { FieldWrap } from 'Common/Components/FieldWrap';
import { Select } from 'Common/Components/Select';
import { useAppDispatch, useAppShallowSelector } from 'Entry/Hooks/Redux';
import { connectingStateSelector } from 'Modules/User/Modules/Connecting/Redux/State/Selectors';
import { changeOSAction } from 'Modules/User/Modules/Connecting/Redux/State/Actions';
import { EOperationSystemType } from 'Modules/User/Modules/Connecting/Enums';
import { ISelectOption } from 'Common/Components/Select/Models';
import styles from './OperationSystem.module.scss';
import { LOGOS_MAP } from './Logos';
import { renderDefaultEnumsOptions } from 'Common/Helpers/Options';

/**
 * Функция кастомного рендера опции.
 *
 * @param option Опция выбора.
 */
function renderCustomOption ({ title, value }: ISelectOption<EOperationSystemType>): React.JSX.Element {
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
function renderCustomValue (value: Optional<EOperationSystemType>): React.JSX.Element {
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

/** Поле выбора операционной системы. */
export function OperationSystemSelect (): React.JSX.Element {
    const dispatch = useAppDispatch();
    const { operationSystem } = useAppShallowSelector(connectingStateSelector);

    /**
     * Обработчик изменения значения поля.
     *
     * @param newValue Новое значение поля.
     */
    const handleChange = (newValue: EOperationSystemType): void => {
        dispatch(changeOSAction(newValue));
    };

    return (
        <FieldWrap>
            <Select<EOperationSystemType>
                value={ operationSystem }
                options={ renderDefaultEnumsOptions(EOperationSystemType) }
                onChange={ handleChange }
                renderCustomOption={ renderCustomOption }
                renderCustomValue={ renderCustomValue }
            />
        </FieldWrap>
    );
}

