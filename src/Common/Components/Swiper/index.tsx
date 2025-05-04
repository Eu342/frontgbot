import React from 'react';
import styles from './Swiper.module.scss';
import cx from 'classnames';
import { IBaseComponentProps } from 'Common/Models';

// /** Минимальная высота для свайпа. */
// const MIN_Y_DIFF = 5;

interface IProps extends IBaseComponentProps {
    /** Дочерний элемент. */
    children: React.ReactNode;
    /** Флаг раскрытого свайпера. */
    isOpen: boolean;
    /** Обработчик переключения свайпера. */
    toggleSwipe: (swiper: boolean) => void;
}

/** Свайпер. */
export function Swiper (props: IProps): React.JSX.Element {
    const {
        children,
        isOpen,
        className
        // toggleSwipe
    } = props;
    // const [height, setHeight] = useState<number>(null);
    //
    // /** Обработчик переключения свайпера. */
    // const toggleIsOpen = (): void => {
    //     toggleSwipe(!isOpen);
    // };
    //
    //
    // /**
    //  * Функция отслеживания начала свайпа.
    //  *
    //  * @param evt Событие свайпа.
    //  */
    // function handleTouchStart(evt: React.TouchEvent<HTMLDivElement>): void {
    //     setHeight(evt.touches[0]?.clientY);
    // }
    //
    // /**
    //  * Функция отслеживания конца свайпа.
    //  *
    //  * @param evt Событие свайпа.
    //  */
    // function handleTouchMove(evt: React.TouchEvent<HTMLDivElement>): void {
    //     if (!height) {
    //         return;
    //     }
    //
    //     const yUp: number = evt.touches[0].clientY;
    //     const yDiff = height - yUp;
    //
    //     if (!yDiff) {
    //         return;
    //     }
    //
    //     if (yDiff >= MIN_Y_DIFF) {
    //         toggleSwipe(true);
    //     } else {
    //         toggleSwipe(false);
    //     }
    //
    //     setHeight(null);
    // }

    return (
        <div
            className={ cx(styles.swiper, className) }
            // onTouchStart={ handleTouchStart }
            // onTouchMove={ handleTouchMove }
        >
            <button
                className={ styles.extendButton }
                // onClick={ toggleIsOpen }
            >
                <div className={ styles.swipeArea }/>
            </button>

            <div className={ isOpen ? cx(styles.swipeBlock, styles.opened) : styles.swipeBlock }>
                {children}
            </div>
        </div>
    );
}

