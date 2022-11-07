import { useEffect, useRef } from 'react'

export const useAutofocus = (visible) => {
  const firstLinkRef = useRef()

  useEffect(() => {
    if (visible) {
      firstLinkRef.current.focus()
    }
  })

  return { firstLinkRef }
}
