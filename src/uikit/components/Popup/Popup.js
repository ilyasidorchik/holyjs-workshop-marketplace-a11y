import { useRef } from 'react'
import cx from 'classnames'
import { useFocusTrap } from 'web-platform-alpha/libs/focus-trap'
import { useOverlay } from 'web-platform-alpha/semantic/overlay'

import './Popup.scss'

const Popup = ({
  className,
  visible,
  onClose,
  children,
  'aria-modal': ariaModal = true,
}) => {
  const ref = useRef(null)

  useFocusTrap({
    enabled: visible,
    scopeRef: ref,
    restoreFocus: true,
  })
  useOverlay({
    visible,
    onClose,
    essentialRefs: [ref],
  })

  if (!visible) {
    return null
  }

  return (
    <div className={cx('Popup', className)}>
      <div className="Popup-Paranja" />
      <div
        className="Popup-Wrapper"
        ref={ref}
        role="dialog"
        aria-modal={ariaModal}
      >
        <div className="Popup-Content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup
