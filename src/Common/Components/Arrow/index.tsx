import React from 'react';
import { EArrowDirection } from './Enums';
import cx from 'classnames';
import styles from './Arrow.module.scss';
import { IBaseComponentProps } from 'Common/Models';

interface IProps extends IBaseComponentProps {
    /** Направление стрелки. */
    direction: EArrowDirection;
    /** Флаг активной стрелки. */
    isActive: boolean;
    /** Обработчик изменения флага активной стрелки. */
    onChange?: (newValue: boolean) => void;
}

/** Стрелка. */
export function Arrow (props: IProps): React.JSX.Element {
    const { direction, isActive, onChange, className } = props;

    /** Обработчик переключения режима стрелки. */
    const toggleIsActive = (): void => {
        onChange?.(!isActive);
    };

    return (
        <div
            className={ isActive ? cx(styles.arrow, styles[direction], styles.isActive, className) : cx(styles.arrow, styles[direction], className) }
            onClick={ toggleIsActive }
        >
            <svg width="100%" height="100%" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.333218 24.0489C0.331486 23.2496 0.640032 22.4751 1.2053 21.8596L20.1636 1.33512C20.8072 0.636545 21.7321 0.197237 22.7347 0.11384C23.7373 0.0304432 24.7356 0.309788 25.5099 0.890421C26.2842 1.47105 26.7712 2.30541 26.8636 3.20995C26.956 4.11449 26.6464 5.0151 26.0028 5.71368L9.01614 24.0489L25.3961 42.3841C25.7111 42.734 25.9463 43.1366 26.0882 43.5688C26.2302 44.001 26.276 44.4542 26.2232 44.9024C26.1703 45.3506 26.0198 45.785 25.7803 46.1806C25.5407 46.5761 25.2169 46.9251 24.8274 47.2074C24.4375 47.5207 23.9801 47.7579 23.4839 47.9043C22.9877 48.0507 22.4633 48.103 21.9436 48.0581C21.4239 48.0131 20.9201 47.8718 20.4637 47.643C20.0074 47.4142 19.6083 47.1029 19.2916 46.7285L0.9778 26.204C0.501886 25.5708 0.274937 24.8121 0.333218 24.0489Z"
                    fill="#898989"/>
            </svg>
        </div>
    );
}

