import cx from 'classnames'

import './Popup.scss'

const Popup = ({ className, children }) => {
  return (
    <div className={cx('Popup', className)}>
      <div className="Popup-Paranja" />
      <div className="Popup-Wrapper">
        <div className="Popup-Content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup
