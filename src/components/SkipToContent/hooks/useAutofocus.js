import { useEffect, useRef } from 'react'

export const useAutofocus = (visible) => {
  const ref = useRef(null)

  useEffect(() => {
    if (visible && ref.current) {
      ref.current.focus()
    }
  }, [visible])

  return { ref }
}
