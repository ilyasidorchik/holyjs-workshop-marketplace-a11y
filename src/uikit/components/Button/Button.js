import './Button.scss'

import cx from 'classnames'

const Button = ({
  className,
  view = 'default',
  onClick,
  children,
}) => (
  <button
    className={cx(
      'Button',
      {
        Button_view_default: view === 'default',
        Button_view_secondary:
          view === 'secondary',
      },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
