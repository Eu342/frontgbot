import React from 'react';
import styles from './Advertising.module.scss';
import { IBaseComponentProps } from 'Common/Models';

type TProps = IBaseComponentProps;

/** Блок рекламы. */
export function Advertising (_: TProps): React.JSX.Element {
    return (
        <div className={ styles.advertising }>

        </div>
    );
}

