import { useEffect } from 'react'
import { assertIsNode } from '../util'

export const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      assertIsNode(event.target)

      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}
