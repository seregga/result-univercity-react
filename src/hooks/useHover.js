import { useState, useRef, useEffect } from 'react'

export const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    useEffect(() => {
        const elem = ref.current
        elem.addEventListener('mouseenter', () => setHovered(true))
        elem.addEventListener('mouseleave', () => setHovered(false))

        return () => {
            elem.removeEventListener('mouseenter', () => setHovered(true))
            elem.removeEventListener('mouseleave', () => setHovered(false))
        }
    }, [])

    return { hovered, ref }
}