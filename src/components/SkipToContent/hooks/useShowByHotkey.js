import { useEffect, useState } from 'react'

import { useAutofocus } from './useAutofocus'

export const useShowByHotkey = () => {
  const [visible, isVisible] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      const isTypographyLayout = e.key === '→'

      if (
        e.altKey &&
        (e.key === '0' || isTypographyLayout)
      ) {
        isVisible(true)
      }
    })
  }, [])

  const onBlur = () => {
    isVisible(false)
  }

  const {firstLinkRef} = useAutofocus(visible)

  return { visible, firstLinkRef, onBlur }
}
