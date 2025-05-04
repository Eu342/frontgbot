import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

/** Функция навигации с сохранением параметров. */
export function useNavigateWithParams (): (url: string) => void {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    return useCallback((url: string): void => {
        navigate(url + '?' + searchParams);
    }, [navigate, searchParams]);
}