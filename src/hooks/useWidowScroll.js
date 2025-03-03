import { useState, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
    const [scroll, setScroll] = useState({
        x: window.scrollX,
        y: window.scrollY
    })

    const scrollTo = useCallback(({ x, y }) => {
        window.scrollTo(x, y)
    }, []);

    useWindowEvent('scroll', () => {
        setScroll({
            x: window.scrollX,
            y: window.scrollY,
        })
    })

    return [scroll, scrollTo];
}