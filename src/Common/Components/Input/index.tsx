import React, { useEffect, useState } from 'react';
import styles from './Input.module.scss';
import cx from 'classnames';
import { IBaseComponentProps } from 'Common/Models';

interface IProps extends IBaseComponentProps {
    /** Значение инпута. */
    value: Optional<string>;
    /** Обработчик изменения значения инпута. */
    onChange: (newValue: string) => void;
    /** Ограничение количества символов для ввода. */
    maxLength: number;
    /** Плейсхолдер. */
    placeholder?: string;
    /** Допустимые символы для ввода. */
    pattern?: string;
}

/** Инпут для ввода текста. */
export function Input (props: IProps): React.JSX.Element {
    const {
        value = '',
        onChange,
        placeholder,
        pattern,
        maxLength,
        className
    } = props;
    const [state, setState] = useState(value);

    /**
     * Обработчик изменения значения в поле.
     *
     * @param evt Событие изменения поля.
     */
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        if (target.value.match(pattern || '*') && target.value.length <= maxLength) {
            setState(target.value);
        }
    };

    /** Обработчик потери фокуса полем.s */
    const handleBlur = (): void => {
        onChange(state);
    };

    // Отслеживание изменений в поле.
    useEffect(() => {
        if (value) {
            setState(value);
        }
    }, [value]);


    return (
        <div className={ cx(styles.inputWrap, className) }>
            <input
                className={ styles.input }
                type="text"
                value={ state }
                onChange={ handleChange }
                onBlur={ handleBlur }
                placeholder={ placeholder }
            />
        </div>
    );
}

