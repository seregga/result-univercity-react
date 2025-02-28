import { useState} from 'react'
import { useWindowEvent } from '../hooks/useWindowEvent'

export const useViewportSize = () => {
  const [width, setWidth] = useState(window.innerWidth )
  const [height, setHeight] = useState(window.innerHeight)

  const changeSize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useWindowEvent('resize', changeSize)

  return { width, height }
}