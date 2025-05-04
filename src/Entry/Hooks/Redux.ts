import store, { IReduxState } from '../Store';
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/** Типизированный селектор приложения. */
export const useAppSelector: TypedUseSelectorHook<IReduxState> = useSelector;

/** Типизированный селектор приложения с глубоким сравнением. */
export function useAppShallowSelector<R = unknown> (selector: (state: IReduxState) => R): R {
    return useAppSelector<R>(selector, shallowEqual);
}

/** Типизированный диспатч приложения. */
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
