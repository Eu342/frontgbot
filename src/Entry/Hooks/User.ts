import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'Entry/Hooks/Redux';
import { useEffect } from 'react';
import { setUserIdAction } from 'Entry/Redux/Settings/Actions';

/** Хук получения идентификатора пользователя. */
export function useGetUserId (): void {
    const dispatch = useAppDispatch();
    const [params] = useSearchParams();
    const id = params.get('user_id');

    // Запись идентификатора пользователя.
    useEffect(() => {
        if (id) {
            dispatch(setUserIdAction(id));
        }
    }, [dispatch, id]);
}