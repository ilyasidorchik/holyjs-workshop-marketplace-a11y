import { Link as NavLink } from 'react-router-dom'
import cx from 'classnames'

import './Link.scss'

const Link = ({
  className,
  to,
  innerRef,
  children,
}) => (
  <NavLink
    className={cx('Link', className)}
    ref={innerRef}
    to={to}
  >
    {children}
  </NavLink>
)

export default Link
