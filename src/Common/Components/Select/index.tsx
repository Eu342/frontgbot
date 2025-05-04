import React, { useCallback, useEffect, useState } from 'react';
import { ISelectOption } from './Models';
import map from 'lodash/map';
import find from 'lodash/find';
import styles from './Select.module.scss';
import cx from 'classnames';
import { Loader } from '../Loader';
import { Arrow } from '../Arrow';
import { EArrowDirection } from '../Arrow/Enums';
import { COMMON_TRANSLATIONS } from 'Common/Translations/Tranlstaions';
import head from 'lodash/head';
import isUndefined from 'lodash/isUndefined';
import isEmpty from 'lodash/isEmpty';
import { IBaseComponentProps } from 'Common/Models';

interface IProps<T> extends IBaseComponentProps {
    /** Значение поля. */
    value: Optional<T>;
    /** Опции выбора. */
    options: Array<ISelectOption<T>>;
    /** Обработчик изменения поля. */
    onChange: (newValue: T) => void;
    /** Флаг загрузки. */
    isLoading?: boolean;
    /** Значение, выбранное по-умолчанию. */
    initialSelect?: T;
    /** Функция кастомного рендера значения селекта. */
    renderCustomValue?: (value: Optional<T>) => React.JSX.Element;
    /** Функция кастомного рендера элемента опции. */
    renderCustomOption?: (option: ISelectOption<T>) => React.JSX.Element;
}

/** Компонент выбора значения из статичного списка. */
export function Select<T = string> (props: IProps<T>): React.JSX.Element {
    const {
        value,
        options,
        onChange,
        isLoading,
        initialSelect,
        renderCustomValue,
        renderCustomOption,
        className
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState(find(options, (option) => option.value === value)?.title);

    // Актуализация иформации в селекте.
    useEffect(() => {
        setState(find(options, (option) => option.value === value)?.title);
    }, [value]);

    /** Обработчик переключения флага открытого спика. */
    const toggleIsOpen = (): void => {
        if (isLoading || isEmpty(options)) {
            return;
        }

        setIsOpen((prevState) => !prevState);
    };

    /**
     * Обработчик изменения выбранного значения в списке.
     *
     * @param option Опция из списка.
     */
    const handleChange = useCallback((option: ISelectOption<T>): void => {
        setState(option.title);
        onChange(option.value);

        setIsOpen(false);
    }, [onChange]);

    const handleBlur = (): void => {
        setIsOpen(false);
    };

    // Предвыбор значения.
    useEffect(() => {
        if (value) {
            return;
        }

        const prefillValue: Optional<ISelectOption<T>> = find(options, (option) => option.value === initialSelect) || head(options);

        if (!isUndefined(prefillValue)) {
            handleChange(prefillValue as ISelectOption<T>);
        }
    }, [options, initialSelect, value]);

    return (
        <div
            className={ cx(styles.select, className) }
            tabIndex={ -1 }
            onBlur={ handleBlur }
        >
            <div onClick={ toggleIsOpen } className={ isOpen ? cx(styles.value, styles.value__hoverable) : styles.value }>
                {renderCustomValue?.(value) || (
                    <span className={styles.text}>
                        {state || COMMON_TRANSLATIONS.notSpecified}
                    </span>
                )}

                <div className={styles.status}>
                    {isLoading
                        ? <Loader/>
                        : <Arrow
                            direction={ EArrowDirection.Y }
                            isActive={ !isOpen }
                            onChange={ setIsOpen }
                        />
                    }
                </div>
            </div>


            <div className={ isOpen ? cx(styles.options, styles.open) : styles.options }>
                {map(options, (option) => {
                    if (option.value === state) {
                        return null;
                    }

                    return (
                        <div
                            className={ styles.option }
                            onClick={ (): void => handleChange(option) }
                            key={ option.title }
                        >
                            {renderCustomOption?.(option) || (
                                <span className={styles.text}>
                                    {option.title}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

