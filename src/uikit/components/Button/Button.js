import './Button.scss'

import cx from 'classnames'

const Button = ({
  className,
  view = 'default',
  onClick,
  children,
  ...rest
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
    {...rest}
  >
    {children}
  </button>
)

export default Button
