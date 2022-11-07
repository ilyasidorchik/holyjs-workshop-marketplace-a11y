import cx from 'classnames'

import './VisuallyHidden.scss'

const VisuallyHidden = ({
  className,
  as: Component = 'span',
  children,
}) => {
  return (
    <Component
      className={cx('VisuallyHidden', className)}
    >
      {children}
    </Component>
  )
}

export default VisuallyHidden
