import React from 'react';
import { EButtonType } from './Enums';
import styles from './Button.module.scss';
import cx from 'classnames';
import { IBaseComponentProps } from 'Common/Models';

interface IProps extends IBaseComponentProps {
    /** Тип кнопки. */
    type: EButtonType;
    /** Дочерний элемент кнопки. */
    children: React.ReactNode;
    /** Обработчик нажатия кнопки. */
    onClick?: () => void;
}

/** Общий компонент кнопки. */
export function Button ({ type, children, onClick, className }: IProps): React.JSX.Element {
    return (
        <button
            className={ cx(styles.button, styles[type], className) }
            onClick={ onClick }
        >
            {children}
        </button>
    );
}

