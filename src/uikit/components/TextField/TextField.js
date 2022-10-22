import cx from 'classnames'

import './TextField.scss'

const TextField = ({ className, placeholder }) => {
  return (
    <input
      className={cx('TextField', className)}
      type="text"
      placeholder={placeholder}
    />
  )
}

export default TextField
