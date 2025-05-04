import React from 'react';
import styles from './EmptyBlock.module.scss';
import cx from 'classnames';

interface IProps {
    /** Флаг показа блока. */
    isShow: boolean;
}

// TODO В него можно будет добавить рекламу, партнёров и т.д.
/** Пустой блок для заполнения пространства формы. */
export function EmptyBlock ({ isShow }: IProps): Nullable<React.JSX.Element> {
    return <div className={ isShow ? styles.emptyBlock : cx(styles.emptyBlock, styles.hide) } />;
}

