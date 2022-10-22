import cx from 'classnames'

import './Title.scss'

const Title = ({
  className,
  as: Component = 'div',
  size = 'xs',
  children,
}) => (
  <Component
    className={cx(
      'Title',
      {
        Title_size_xs: size === 'xs',
        Title_size_s: size === 's',
        Title_size_m: size === 'm',
        Title_size_l: size === 'l',
      },
      className
    )}
  >
    {children}
  </Component>
)

export default Title
