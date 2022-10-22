import { Link as NavLink } from 'react-router-dom'
import cx from 'classnames'

import './Link.scss'

const Link = ({ className, to, children }) => (
  <NavLink
    className={cx('Link', className)}
    to={to}
  >
    {children}
  </NavLink>
)

export default Link
