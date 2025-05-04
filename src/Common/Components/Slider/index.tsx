import React, { useRef } from 'react';
import styles from './Slider.module.scss';
import map from 'lodash/map';
import cx from 'classnames';
import { IBaseComponentProps } from 'Common/Models';
import classNames from 'classnames';

interface IProps<T extends string> extends IBaseComponentProps {
    /** Список элементов для прокрутки. */
    list: T[];
    /** Максимальное количество элеметов. */
    maxItems?: number;
    /** Функция рендера кастомного слайда. */
    renderCustomSlide?: (item: T) => React.ReactNode;
}

/** Компонент горизонтального слайдера. */
export function Slider<T extends string> (props: IProps<T>): React.JSX.Element {
    const { list, maxItems, renderCustomSlide } = props;
    const ref = useRef<HTMLDivElement>(null);
    const style = {
        '--max-items': maxItems
    } as React.CSSProperties;

    /** 
     * Обработчик начала нажатия. 
     * 
     * @param event Событие начала нажатия.
     */
    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
        event.stopPropagation();
    };

    return (
        <div 
            className={ cx(styles.slider, classNames) } 
            ref={ ref }
            onTouchMove={ handleTouchMove }
        >
            {map(list, (item) => {
                return (
                    <div
                        style={ style }
                        key={ item }
                        className={ styles.slide }
                    >
                        {renderCustomSlide ? renderCustomSlide(item) : item}
                    </div>
                );
            })}
        </div>
    );
}

