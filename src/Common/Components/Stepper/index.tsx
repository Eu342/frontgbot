import React from 'react';
import { IStepperStepConfig } from './Models';
import styles from './Stepper.module.scss';
import { ActiveStep } from './Components/ActiveStep';
import { Step } from './Components/Step';
import cx from 'classnames';
import { IBaseComponentProps } from 'Common/Models';


/** Тип параметров степпера. */
export interface IStepperConfig extends IBaseComponentProps  {
    /** Конфигурация степпера. */
    stepsConfig: IStepperStepConfig[]
}

/** Степпер. */
export function Stepper ({ stepsConfig, className } : IStepperConfig): React.JSX.Element {
    return (
        <div className={ cx(styles.stepper, className) }>
            {stepsConfig.map(({ id, isActive }) => (
                <div key={ id } className={ styles.step }>
                    {isActive ? <ActiveStep /> : <Step />}
                </div>
            ))}
        </div>
    );
}

