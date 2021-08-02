import { useState, useRef, useEffect } from 'react';

export function useScroll() {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [onTop, setOnTop] = useState(true);


    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current = 0;
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    function onScroll() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > scrollRef.current) {
            setScrollingDown(true);
        } else {
            setScrollingDown(false);
        }
        if (st === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
        scrollRef.current = st;
    }

    return { scrollingDown, onTop };
}