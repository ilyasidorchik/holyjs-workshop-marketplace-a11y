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
  })

  const onBlur = () => {
    isVisible(false)
  }

  const { ref: firstLinkRef } =
    useAutofocus(visible)

  return { visible, firstLinkRef, onBlur }
}
