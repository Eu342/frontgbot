import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector, useAppShallowSelector } from 'Entry/Hooks/Redux';
import { amountListSelector, isAmountListLoadingSelector } from 'Modules/User/Modules/Payment/Redux/Currency/Selectors';
import { Slider } from 'Common/Components/Slider';
import { paymentStateSelector } from 'Modules/User/Modules/Payment/Redux/State/Selectors';
import { changeAmountAction } from 'Modules/User/Modules/Payment/Redux/State/Actions';
import styles from './AmountList.module.scss';
import { MAX_PAYMENT_AMOUNT } from 'Modules/User/Modules/Payment/Consts';
import { getAmountListOptions } from './Utils';
import { TRANSLATIONS } from './Translations';
import { isEmpty } from 'lodash';

/** Максимальное количество элементов слайдера. */
const MAX_ITEMS = 5;

/** Список сумм. */
export function AmountList (): Nullable<React.JSX.Element> {
   const dispatch = useAppDispatch();
   const isLoading = useAppSelector(isAmountListLoadingSelector);
   const amountList = useAppShallowSelector(amountListSelector);
   const { amount } = useAppShallowSelector(paymentStateSelector);
   const list = getAmountListOptions(amountList);

    /**
     * Обработчик нажатия на кнопку суммы.
     *
     * @param addAmount Добавляемое значение.
     */
   const handleClick = useCallback((addAmount: number) => (): void => {
        const newValue = amount ? amount + addAmount : addAmount;

        if (newValue <= MAX_PAYMENT_AMOUNT) {
            dispatch(changeAmountAction(newValue));
        } else {
            dispatch(changeAmountAction(MAX_PAYMENT_AMOUNT));
        }
    } , [dispatch, amount]);

    /**
     * Функция кастомного рендера слайда суммы.
     *
     * @param item Элемент слайдера.
     */
   function renderButtonSlide (item: string): React.JSX.Element {
        return (
            <button
                className={ styles.amountButton }
                onClick={ handleClick(+item) }
            >
                {`${item} ${TRANSLATIONS.vault}`}
            </button>
        );
   }

   if (isEmpty(list)) {
       return null;
   }

    return (
        <div className={ styles.amountList }>
            {isLoading
                ? null
                : <Slider<string>
                    list={ list }
                    maxItems={ MAX_ITEMS }
                    renderCustomSlide={ renderButtonSlide }
                />
            }
        </div>
    );
}

