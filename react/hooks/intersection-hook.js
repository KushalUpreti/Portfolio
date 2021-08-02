import { useState, useEffect, useRef } from 'react'


export const useFadeIn = (ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const inputRef = ref;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });
        observer.observe(inputRef.current);
        return () => observer.unobserve(inputRef.current);
    }, []);

    return [isVisible];
}
