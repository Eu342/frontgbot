import React from 'react';
import styles from './Loader.module.scss';
import { IBaseComponentProps } from 'Common/Models';

type TProps = IBaseComponentProps

/** Лоадер. */
export function Loader (_: TProps): React.JSX.Element {
    return (
        <div className={ styles.loader } />
    );
}

