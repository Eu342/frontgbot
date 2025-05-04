import React from 'react';
import styles from './FormWrap.module.scss';
import { IStepperStepConfig } from '../Stepper/Models';
import { IFormControls } from './Models';
import { Stepper } from '../Stepper';
import { Button } from '../Button';
import { EButtonType } from '../Button/Enums';
import isUndefined from 'lodash/isUndefined';
import { Loader } from '../Loader';
import cx from 'classnames';
import { IBaseComponentProps } from 'Common/Models';

interface IProps extends IBaseComponentProps {
    /** Заголовок. */
    title?: string;
    /** Подзаголовок. */
    subTitle?: string;
    /** Дочерний компонент. */
    children: React.ReactNode;
    /** Конфигурация степпера. */
    stepsConfig?: IStepperStepConfig[];
    /** Параметры контроллера формы. */
    controls: IFormControls;
    /** Флаг загрузки формы. */
    isLoading?: boolean
}

/** Обёртка над компонентом формы. */
export function FormWrap (props: IProps): React.JSX.Element {
    const {
        children,
        stepsConfig,
        title   ,
        subTitle,
        controls,
        isLoading,
        className
    } = props;
    const { submitLabel, onSubmit, cancelLabel, onCancel } = controls;

    return isLoading ?
            <div className={ styles.loader }>
                <Loader />
            </div>
        : (
        <div className={ cx(styles.formWrap, className) }>
            {isUndefined(title) ? null : (
                <div className={styles.title}>
                    {title}
                </div>
            )}

            {isUndefined(subTitle) ? null : (
                <span className={ styles.subTitle }>
                    {subTitle}
                </span>
            )}

            {children}

            <div className={ styles.controls }>
                {stepsConfig ? <Stepper stepsConfig={ stepsConfig } /> : null}

                <Button type={ EButtonType.SUBMIT } onClick={ onSubmit }>
                    {submitLabel}
                </Button>

                {cancelLabel && (
                    <Button type={ EButtonType.SUBMIT } onClick={ onCancel }>
                        {cancelLabel}
                    </Button>
                )}
            </div>
        </div>
    );
}

