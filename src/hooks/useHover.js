import { useState, useRef, useEffect } from 'react';

export const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null);

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    useEffect(() => {
        const elem = ref.current

        if (elem) {
            elem.addEventListener('mouseenter', handleMouseEnter)
            elem.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                elem.removeEventListener('mouseenter', handleMouseEnter)
                elem.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    return { hovered, ref }
}