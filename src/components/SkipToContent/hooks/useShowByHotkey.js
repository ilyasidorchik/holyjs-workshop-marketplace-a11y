import { useEffect, useState } from 'react'

import { useAutofocus } from './useAutofocus'

export const useShowByHotkey = () => {
  const [visible, isVisible] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (
        e.altKey &&
        (e.key === '0' || e.key === '→')
      ) {
        isVisible(true)
      }
    }
    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener(
        'keydown',
        handler
      )
    }
  }, [])

  const { ref: firstLinkRef } =
    useAutofocus(visible)

  const onBlur = ()=> {
    isVisible(false)
  }

  return { visible, firstLinkRef, onBlur }
}
