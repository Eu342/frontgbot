import React from 'react';
import isUndefined from 'lodash/isUndefined';
import styles from './FieldWrap.module.scss';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import cx from 'classnames';
import { IBaseComponentProps } from 'Common/Models';

interface IProps extends IBaseComponentProps {
    /** Дочерний элемент (поле). */
    children: React.ReactNode;
    /** Лейбл поля. */
    label?: string;
    /** Описание поля. */
    description?: string;
    /** Ошибки поля. */
    errors?: string[]
}

/** Компонент обёртки поля. */
export function FieldWrap (props: IProps): React.JSX.Element {
    const { label, description, children, errors, className } = props;

    return (
        <div className={ cx(styles.fieldWrap, className) }>
            {isUndefined(label) ? null : (
                <span className={styles.label}>{label}</span>
            )}

            {children}

            {isUndefined(description) ? null : (
                <span>{description}</span>
            )}

            {isEmpty(errors) ? null : (
                <div className={ styles.errors }>
                    {map(errors, (error) => (
                        <span key={ error } className={ styles.error }>
                            {error}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

